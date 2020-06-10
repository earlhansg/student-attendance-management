import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Module
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from './shared/shared.module';
import { StudentModule } from './student/student.module';
import { SectionModule } from './section/section.module';
import { AttendanceModule } from './attendance/attendance.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthModule } from '@app/auth/auth.module';
// Components
import { DashboardComponent } from '@app/dashboard/container/dashboard.component';
import { ConfirmDialogComponent } from '@app/dashboard/shared/components/confirm-dialog/confirm-dialog.component';

import { AuthService} from '@app/auth/shared/service/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DashboardRoutingModule,
    SharedModule,
    StudentModule,
    SectionModule,
    AttendanceModule,
    ModalModule.forRoot(),
    AuthModule
  ],
  declarations: [
    DashboardComponent,
    ConfirmDialogComponent
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  providers: [AuthService]
})
export class DashboardModule {}
