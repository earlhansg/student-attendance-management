import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Services
import { StudentStoreService } from '@shared/services/student/student-store.service';
import { AttendanceStoreService } from '@shared/services/attendance/attendance-store.service';
// Models
import { Student, ClassAttendance } from '@app/dashboard/shared/models';
// RXJS
import { Observable, Subscription } from 'rxjs';
// Icon
import { faFileSignature } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-attendance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./attendance.component.scss'],
  templateUrl: './attendance.component.html'
})
export class AttendanceComponent implements OnInit, OnDestroy {
  faFileSignature = faFileSignature;
  params: any;
  students$: Observable<Student[]>;
  attendance$: Observable<ClassAttendance[]>;
  subscription: Subscription;

  constructor(
    private studentStore: StudentStoreService,
    private attendanceStore: AttendanceStoreService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.route.params
      .subscribe(param => {
        if (Object.keys(param)[0] === param.section.split('-')[0] ) {
          this.students$ = this.studentStore.getSectionById(param.section.split('-')[1]);
        } else if ('edit' === param.section.split('-')[0]) {
          this.attendance$ = this.attendanceStore.getAttendanceById(param.section.split('-')[1], true);
        }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
