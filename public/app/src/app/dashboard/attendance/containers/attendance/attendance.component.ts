import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Service
import { StudentStoreService } from '@app/dashboard/shared/services/student/student-store.service';
// Models
import { Student } from '@app/dashboard/shared/models';
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
  subscription: Subscription;

  constructor(
    private studentStore: StudentStoreService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.route.params
      .subscribe(param => {
        if (Object.keys(param)[0] === param.section.split('-')[0] ) {
          this.students$ = this.studentStore.getSectionById(param.section.split('-')[1]);
        }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
