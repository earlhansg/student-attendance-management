import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Service
import { RestService } from '@shared/services/rest/rest.service';
// Enum
import { HttpMethodEnum } from '@shared/enums';
// RXJS
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService extends RestService {
 url = '/user';


 constructor(http: HttpClient,
             @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

 getUserByEmail(id): Observable<any> {
  return this.request(`${this.url}?userName=${id}`, HttpMethodEnum.GET);
 }

}
