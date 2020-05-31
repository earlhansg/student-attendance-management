import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
// Service
import { SectionStoreService } from '@shared/services/section/section-store.service';
import { AttendanceMonthlyService } from '@shared/services/attendance/attendance-monthly.service';
// Icon
import { faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { AttendanceByMonth } from '@app/dashboard/shared/models';


@Component({
  selector: 'app-attendances',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./attendances.component.scss'],
  templateUrl: './attendances.component.html'
})
export class AttendancesComponent implements OnInit {
  faFileSignature = faFileSignature;

  monthData: AttendanceByMonth[] = [];

  constructor(
    public sectionStore: SectionStoreService,
    private attendanceMonthlyService: AttendanceMonthlyService) {}

  ngOnInit() {
    this.attendanceMonthlyService.getAttendanceByMonth()
      .subscribe(data => this.monthData = data);
  }

  filteredBySection(sectionId) {
    if (sectionId) {
      return this.monthData.filter(item => item.sectionId === sectionId)[0].averageByMonth;
    }
  }

}
