import { Component } from '@angular/core';
// Service
import { AuthService } from '@app/auth/shared/service/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  error: any;

  constructor(private authService: AuthService) {}

  loginUser(value: {email: string; password: string}) {
    this.authService.loginUser(value.email, value.password).then(res => {
      this.error = res;
    });
  }

}
