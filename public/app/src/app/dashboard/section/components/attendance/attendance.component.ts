import { Component, ChangeDetectionStrategy, Input, SimpleChanges, OnChanges } from '@angular/core';
// Icon
import { faCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-attendance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./attendance.component.scss'],
  templateUrl: './attendance.component.html'
})
export class AttendanceComponent implements OnChanges {
  // days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  // 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31 ];
  faCheck = faCheck;

  @Input()
  month: string;

  @Input()
  numberOfDays: number;
  days: number[];


  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.days = Array.from(Array(this.numberOfDays).keys()).map(day => day + 1);
  }

}
