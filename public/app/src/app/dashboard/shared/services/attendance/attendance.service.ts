import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from '@shared/services/rest/rest.service';

import { HttpMethodEnum } from '@shared/enums';

import { ClassAttendance } from '@shared/models';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AttendanceService extends RestService {
 url = '/attendance';

 constructor(http: HttpClient,
             @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

 getAttendance(): Observable<ClassAttendance[]> {
   return this.request(this.url, HttpMethodEnum.GET);
 }

 getAttendanceById(id: number): Observable<ClassAttendance> {
  return this.request(`${this.url}/${id}`, HttpMethodEnum.GET);
 }

 createAttendance(body: ClassAttendance) {
   return this.request(this.url, HttpMethodEnum.POST, body);
 }

 updateAttendance(id: number, body: ClassAttendance): Observable<ClassAttendance> {
   console.log(`${this.url}/${id}`);
   return this.request(`${this.url}/${id}`, HttpMethodEnum.PATCH, body);
 }

 removeAttendance(id: number): Observable<ClassAttendance> {
   return this.request(`${this.url}/${id}`, HttpMethodEnum.DEL);
 }

}
