import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from '@app/dashboard/shared/services/rest/rest.service';

import { HttpMethodEnum } from '@app/dashboard/shared/enums';

import { Section } from '@app/dashboard/student/shared/models';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SectionsService extends RestService {
 url = '/sections';

 constructor(http: HttpClient,
             @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

 getSections(): Observable<Section[]> {
    return this.request(this.url, HttpMethodEnum.GET);
 }

 createSection(body: Section) {
    return this.request(this.url, HttpMethodEnum.POST, body);
 }

 updateSection(id: number, body: Section): Observable<Section> {
    return this.request(`${this.url}?id=${id}`, HttpMethodEnum.PATCH, body);
 }

 removeSection(id: number) {
    return this.request(`${this.url}?id=${id}`, HttpMethodEnum.DEL);
 }

}
