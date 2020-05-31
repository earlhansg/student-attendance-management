import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from '@shared/services/rest/rest.service';

import { HttpMethodEnum } from '@shared/enums';

import { AttendanceByMonth } from '@shared/models';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AttendanceMonthlyService extends RestService {
 url = '/attendanceByMonth';

 constructor(http: HttpClient,
             @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

 getAttendanceByMonth(): Observable<AttendanceByMonth[]> {
  return this.request(`${this.url}`, HttpMethodEnum.GET);
 }

}
