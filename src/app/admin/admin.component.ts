import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { FromModel } from 'src/models/Form.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  panelOpenState = false;
  public sliderValue: number = 0;
  public allSubmissions: FromModel[] = [];

  constructor() {}

  ngOnInit(): void {
    const submissions = localStorage.getItem('jobSubmitions');
    if (submissions) {
      this.allSubmissions = JSON.parse(submissions);
    }
  }

  changeValue(event: MatSliderChange, index: number) {
    this.allSubmissions[index].rating = event.value;
    localStorage.setItem('jobSubmitions', JSON.stringify(this.allSubmissions));
  }
}
