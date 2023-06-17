import { Component, OnInit } from '@angular/core';
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
    console.log(this.allSubmissions);
  }

  // Give it so that the slider value is binded directly to the property
  changeValue(event: any, index: number) {
    this.allSubmissions[index].rating = event.value;
  }

  public formatLabel(value: number): string {
    return `${value}`;
  }
}
