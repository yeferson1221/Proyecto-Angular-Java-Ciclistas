import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  private apiUrl = 'http://localhost:8080/cycling/api/login'; // URL del endpoint de inicio de sesión
  private tokenKey:string = 'token'; // Clave para almacenar el token en el almacenamiento local

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
   // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.apiUrl, credentials,{ responseType: 'text' as 'json' });
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey)?? '';
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

}
