import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Module
import { SectionRoutingModule } from './section-routing.module';
import { SharedModule } from '@app/dashboard/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
// Components
import { SectionsComponent } from './containers/sections/sections.component';
import { SectionComponent } from './containers/section/section.component';
import { SectionListComponent } from './components/section-list/section-list.component';
import { StudentComponent } from './containers/student/student.component';
import { TableComponent } from './shared/components/table/table.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
// Pipe
import { GenderPipe } from './shared/pipe/gender.pipe';


@NgModule({
  imports: [
    CommonModule,
    SectionRoutingModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule
  ],
  declarations: [
    SectionsComponent,
    SectionComponent,
    SectionListComponent,
    StudentComponent,
    TableComponent,
    GenderPipe,
    AttendanceComponent
  ],
  providers: []
})
export class SectionModule { }
