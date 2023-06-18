import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}

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

  onBackClick() {
    this.router.navigate(['/application']);
  }

  onLogoutClick() {
    localStorage.removeItem('jeAdmin');
    this.router.navigate(['/login']);
  }

  changeValue(value: number, index: number) {
    const pagedSubmission = this.pagedSubmissions[index];
    pagedSubmission.rating = value;

    const allSubmissionIndex = this.allSubmissions.indexOf(pagedSubmission);
    if (allSubmissionIndex > -1) {
      this.allSubmissions[allSubmissionIndex].rating = value;
    }

    localStorage.setItem('jobSubmitions', JSON.stringify(this.allSubmissions));
  }
}
