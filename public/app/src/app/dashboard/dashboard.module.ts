import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Module
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from './shared/shared.module';
import { StudentModule } from './student/student.module';
// Components
import { DashboardComponent } from '@app/dashboard/container/dashboard.component';


@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule,
    StudentModule,
    BrowserModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {}
