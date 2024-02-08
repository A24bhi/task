// personal-details.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonalDetailsService {
  private apiUrl = 'http://localhost:56804/';

  constructor(private http: HttpClient) {}

  getPersonalDetails(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
