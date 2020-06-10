
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/auth/shared/shared.module';

import { LoginComponent } from './container/login.component';

import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [ LoginComponent ]
})
export class LoginModule {}
