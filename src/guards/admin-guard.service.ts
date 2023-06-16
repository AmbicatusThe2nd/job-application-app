import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    const jeAdminItemString = sessionStorage.getItem('jeAdmin');

    if (jeAdminItemString) {
      const jeAdminItem = JSON.parse(jeAdminItemString);

      if (jeAdminItem.expiresAt && jeAdminItem.expiresAt > Date.now()) {
        return true;
      }
    }

    this.router.navigate(['/login']);
    return false;
  }
}
