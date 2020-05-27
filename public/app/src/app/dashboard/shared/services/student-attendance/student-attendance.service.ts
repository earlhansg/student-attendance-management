import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from '@shared/services/rest/rest.service';

import { HttpMethodEnum } from '@shared/enums';

import { StudentAttendance } from '@shared/models';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentAttendanceService extends RestService {
 url = '/attendanceByStudent';

 constructor(http: HttpClient,
             @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

 getAttendanceById(id: number): Observable<StudentAttendance> {
  return this.request(`${this.url}/${id}`, HttpMethodEnum.GET);
 }

}
