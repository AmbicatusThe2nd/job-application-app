import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { FromModel } from 'src/models/Form.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  panelOpenState = false;
  public allSubmissions: FromModel[] = [];
  public pagedSubmissions: FromModel[] = [];

  constructor() {}

  ngOnInit(): void {
    const submissions = localStorage.getItem('jobSubmitions');
    if (submissions) {
      this.allSubmissions = JSON.parse(submissions);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.updatePagedSubmissions();
    });
  }

  updatePagedSubmissions() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    this.pagedSubmissions = this.allSubmissions.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent) {
    this.updatePagedSubmissions();
  }

  changeValue(event: MatSliderChange, index: number) {
    const pagedSubmission = this.pagedSubmissions[index];
    pagedSubmission.rating = event.value;

    const allSubmissionIndex = this.allSubmissions.indexOf(pagedSubmission);

    if (allSubmissionIndex > -1) {
      this.allSubmissions[allSubmissionIndex].rating = event.value;
    }

    localStorage.setItem('jobSubmitions', JSON.stringify(this.allSubmissions));
  }
}
