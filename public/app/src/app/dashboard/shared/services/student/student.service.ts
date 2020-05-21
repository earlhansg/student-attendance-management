import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Service
import { RestService } from '@shared/services/rest/rest.service';
// Enum
import { HttpMethodEnum } from '@shared/enums';
// Model
import { Student } from '@shared/models';
// RXJS
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentService extends RestService {
 url = '/students';


 constructor(http: HttpClient,
             @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }


 getStudents(): Observable<Student[]> {
  return this.request(this.url, HttpMethodEnum.GET);
 }

 getStudentById(id): Observable<Student> {
  return this.request(`${this.url}/${id}`, HttpMethodEnum.GET);
 }

 createStudent(body: Student) {
  return this.request(this.url, HttpMethodEnum.POST, body);
 }

 updateStudent(id: number, body: Student): Observable<Student> {
  return this.request(`${this.url}/${id}`, HttpMethodEnum.PATCH, body);
 }

 removeStudent(id: number) {
  return this.request(`${this.url}/${id}`, HttpMethodEnum.DEL);
 }

}
