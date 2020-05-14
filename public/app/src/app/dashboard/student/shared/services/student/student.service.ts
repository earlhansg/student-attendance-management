import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from '@app/dashboard/shared/services/rest/rest.service';

import { HttpMethodEnum } from '@app/dashboard/shared/enums';

import { Student } from '@app/dashboard/student/shared/models';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentService extends RestService {
 url = '/students';

 constructor(http: HttpClient,
             @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

 getStudents(): Observable<Student[]> {
    return this.request(this.url, HttpMethodEnum.GET);
 }

 createStudent(body: Student) {
    return this.request(this.url, HttpMethodEnum.POST, body);
 }

 updateStudent(id: number, body: Student): Observable<Student> {
    return this.request(`${this.url}?id=${id}`, HttpMethodEnum.PATCH, body);
 }

 removeStudent(id: number) {
    return this.request(`${this.url}?id=${id}`, HttpMethodEnum.DEL);
 }

}
