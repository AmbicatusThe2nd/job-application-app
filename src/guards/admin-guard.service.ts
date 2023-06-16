import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (sessionStorage.getItem('jeAdmin')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
