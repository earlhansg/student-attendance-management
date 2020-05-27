import { Component, ChangeDetectionStrategy, Input, SimpleChanges, OnChanges } from '@angular/core';
// Icon
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
// Data
import { monthType } from '@app/dashboard/section/shared/data';

@Component({
  selector: 'app-attendance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./attendance.component.scss'],
  templateUrl: './attendance.component.html'
})
export class AttendanceComponent implements OnChanges {
  faCheck = faCheck;
  faTimes = faTimes;

  @Input()
  month: string;

  @Input()
  numberOfDays: number;
  days: number[];

  @Input()
  attendance: any[];

  attendanceByMonth;
  displayAttendanceByMonth;


  constructor() {}

  ngOnChanges({ attendance }: SimpleChanges): void {
    this.days = Array.from(Array(this.numberOfDays).keys()).map(day => day + 1);
    if (attendance && attendance.currentValue) {
      this.attendance = attendance.currentValue;
      this.checkAttendanceByMonth(this.attendance);
    }
  }

  // return object with "month" key followed by days present/absent
  checkAttendanceByMonth(attendance: any[]) {
    this.attendanceByMonth = attendance
    .sort((curr, prev) => {
      return new Date(curr.date).getTime() - new Date(prev.date).getTime();
    })
    .reduce((acc, curr) => {
      const index = curr.date.split('-')[1].replace(/^0+/, '');
      const day = curr.date.split('-')[2].replace(/^0+/, '').split('')[0];
      const month = monthType[`${index}`];
      if (!acc[month]) {
          acc[month] = [];
      }
      acc[month].push({day: parseInt(day, 10), status: curr.status});
      return acc;
    }, {} );
    this.displayAttendance();
  }
  // return array of objects with this format { day: 1, present: true } to display it to DOM
  displayAttendance() {
    this.displayAttendanceByMonth = this.days.reduce((prev, curr) => {
      const dataByMonth = this.attendanceByMonth[`${this.month}`];
      if (dataByMonth) {
        const data = dataByMonth.filter(item => item.day === curr);
        if (data[0]) {
          prev.push({ day: curr, present: data[0].status });
        } else {
          prev.push({ day: curr, present: 'restday' });
        }
      }
      return prev;
    }, []);
  }

}
