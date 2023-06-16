import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.scss'],
})
export class SuccessMessageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngOnBackClick(): void {
    this.router.navigate(['/application']);
  }
}
