import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-attendance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./attendance.component.scss'],
  templateUrl: './attendance.component.html'
})
export class AttendanceComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
