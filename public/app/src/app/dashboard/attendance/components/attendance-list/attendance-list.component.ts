import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
// Model
import { ClassAttendance } from '@shared/models';

@Component({
  selector: 'app-attendance-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./attendance-list.component.scss'],
  templateUrl: './attendance-list.component.html'
})
export class AttendanceListComponent {

  @Input()
  sectionName: string;
  @Input()
  attendance: ClassAttendance[];

  constructor(private router: Router) {}

}
