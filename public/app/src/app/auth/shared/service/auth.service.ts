import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';
import { of, BehaviorSubject, Observable, throwError } from 'rxjs';

export interface User {
  userName?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  authenticated?: boolean;
}

@Injectable()
export class AuthService {
  users: User[] = [];

  private readonly AUTHENTICATED_USER = new BehaviorSubject<User>({authenticated: false});
  readonly user$ = this.AUTHENTICATED_USER.asObservable();

  constructor(
  private userService: UserService,
  private router: Router
  ) {}

  getUser(): User {
    return this.AUTHENTICATED_USER.getValue();
  }

  setUser(val: User) {
    this.AUTHENTICATED_USER.next(val);
  }

  async loginUser(username, password) {
    const authenticatedEmail = await this.checkUserByEmail(username);
    if (authenticatedEmail) {
        if (this.checkUserByPassword(password)) {
          localStorage.setItem('User', JSON.stringify(this.getUser()));
          this.router.navigate(['dashboard']);
        } else {
          this.setUser({authenticated: false});
          return 'incorrect password';
        }
    } else {
      this.setUser({authenticated: false});
      return 'email not found';
    }
  }

  async checkUserByEmail(email) {
    this.users = await this.userService.getUserByEmail(email).toPromise();
    return !!this.users.length;
  }

  checkUserByPassword(password): boolean {
    const confirm = this.users.filter(user => user.password === password)[0];
    if (confirm) {
      const { userName, firstName, lastName } = confirm;
      const authenticated = true;
      this.AUTHENTICATED_USER.next({userName, firstName, lastName, authenticated});
    }
    return confirm ? true : false;
  }
}
