import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() value: number | null | undefined = 0;
  @Output() valueChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  changeValue(event: MatSliderChange) {
    this.value = event.value ?? 0;
    this.valueChange.emit(this.value);
  }
}
