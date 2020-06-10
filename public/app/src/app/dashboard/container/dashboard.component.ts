import { Component, OnInit } from '@angular/core';

import { User } from '@app/auth/shared/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: User;
  constructor() {}

  ngOnInit() {
    const retrivedUser = localStorage.getItem('User');
    this.user = JSON.parse(retrivedUser);
  }

}
