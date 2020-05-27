import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Icon
import { faUser } from '@fortawesome/free-solid-svg-icons';
// Data
import { months, monthType } from '@app/dashboard/section/shared/data';
// Service
import { StudentAttendanceService } from '@app/dashboard/shared/services/student-attendance/student-attendance.service';
import { SectionStoreService } from '@app/dashboard/shared/services/section/section-store.service';
// RXJS
import { Subscription, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
// Model
import { StudentAttendance, Section } from '@app/dashboard/shared/models';



@Component({
  selector: 'app-student',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./student.component.scss'],
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {
  faUser =  faUser;

  months = months;
  monthType = monthType;

  presentDay: [];

  subscription: Subscription;
  student$: Observable<StudentAttendance>;
  attendanceByMonth$: Observable<any[]>;

  constructor(
    private studentAttendanceService: StudentAttendanceService,
    public sectionStore: SectionStoreService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.student$ = this.route.params
      .pipe(switchMap(param => this.studentAttendanceService.getAttendanceById(param.id)));
  }
  // fetch section name base on the code provided
  sectionName(sections: Section[], code) {
    return sections.filter(section => section.id === code)[0].name;
  }

}
