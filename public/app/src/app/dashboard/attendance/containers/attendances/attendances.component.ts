import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-attendances',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./attendances.component.scss'],
  templateUrl: './attendances.component.html'
})
export class AttendancesComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
