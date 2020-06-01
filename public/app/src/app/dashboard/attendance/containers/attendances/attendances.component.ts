import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
// Service
import { SectionStoreService } from '@shared/services/section/section-store.service';
import { AttendanceMonthlyService } from '@shared/services/attendance/attendance-monthly.service';
// Model
import { AttendanceByMonth } from '@app/dashboard/shared/models';
// RXJS
import { Observable } from 'rxjs';
// Icon
import { faFileSignature } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-attendances',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./attendances.component.scss'],
  templateUrl: './attendances.component.html'
})
export class AttendancesComponent implements OnInit {
  faFileSignature = faFileSignature;

  monthData: Observable<AttendanceByMonth[]>;

  constructor(
    public sectionStore: SectionStoreService,
    private attendanceMonthlyService: AttendanceMonthlyService) {}

  ngOnInit() {
    this.monthData = this.attendanceMonthlyService.getAttendanceByMonth();
  }

  filteredBySection(monthData: AttendanceByMonth[], sectionId: number) {
    if (monthData && sectionId) {
      return monthData.filter(item => item.sectionId === sectionId)[0].averageByMonth;
    } else {
      return [ null ];
    }
  }

}
