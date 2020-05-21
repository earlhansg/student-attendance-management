import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Module
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from './shared/shared.module';
import { StudentModule } from './student/student.module';
import { SectionModule } from './section/section.module';
import { ModalModule } from 'ngx-bootstrap/modal';
// Components
import { DashboardComponent } from '@app/dashboard/container/dashboard.component';
import { ConfirmDialogComponent } from '@app/dashboard/shared/components/confirm-dialog/confirm-dialog.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DashboardRoutingModule,
    SharedModule,
    StudentModule,
    SectionModule,
    ModalModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    ConfirmDialogComponent
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class DashboardModule {}
