import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Module
import { AttendanceRoutingModule } from './attendance-routing.module';
import { SharedModule } from '@app/dashboard/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Components
import { AttendancesComponent } from './containers/attendances/attendances.component';
import { AttendanceComponent } from './containers/attendance/attendance.component';
import { LineGraphComponent } from './components/line-graph/line-graph.component';
import { AttendanceListComponent } from './components/attendance-list/attendance-list.component';
// Bootstrap
import { TabsModule } from 'ngx-bootstrap/tabs';
// Chart
import { ChartsModule } from 'ng2-charts';



@NgModule({
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    SharedModule,
    FontAwesomeModule,
    TabsModule.forRoot(),
    ChartsModule
  ],
  declarations: [
    AttendancesComponent,
    AttendanceComponent,
    LineGraphComponent,
    AttendanceListComponent
  ]
})
export class AttendanceModule { }
