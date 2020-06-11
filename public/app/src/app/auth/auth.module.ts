import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule.forRoot()
    ]
})
export class AuthModule {}
