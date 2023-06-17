import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public hide: Boolean = true;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  loginForm = this.formBuilder.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    if (sessionStorage.getItem('jeAdmin')) {
      this.router.navigate(['/admin']);
    }
  }

  ngOnSubmit(): void {
    if (this.loginForm.valid) {
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 1); // Expires in 1 day

      const jeAdminItem = {
        value: true,
        expiresAt: expirationDate.getTime(),
      };

      localStorage.setItem('jeAdmin', JSON.stringify(jeAdminItem));
      this.router.navigate(['/admin']);
    }
  }
}
