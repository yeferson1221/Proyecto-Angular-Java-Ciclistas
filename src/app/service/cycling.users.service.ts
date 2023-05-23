import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class CyclingUsersService {

  private apiUrl = 'http://localhost:8080/cycling/api/users'; // URL del endpoint protegido

  constructor(private http: HttpClient) { }

  public getUsers(token: string): Observable<User[]> {
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this.http.get<User[]>(this.apiUrl, { headers });
  }
}