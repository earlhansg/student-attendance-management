import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    const hasUser = JSON.parse(localStorage.getItem('User'));
    if (!hasUser) {
        this.router.navigate(['auth/login']);
    }
    return !!hasUser;
  }
}
