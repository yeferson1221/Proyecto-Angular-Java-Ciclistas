import { Component, } from '@angular/core';
import { User } from '../models/users.model';
import { CyclingUsersService } from './service/cycling.users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'cycling-app';
  users: User[] = []; // Declara la propiedad para almacenar la lista de usuarios

  constructor(private userApiService: CyclingUsersService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
    // Obtén el token de autenticación (de tu sistema de autenticación)
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaWF0IjoxNjg0ODA2NTYzLCJzdWIiOiJ5ZWZlckBnbWFpbC5jb20iLCJpc3MiOiJNYWluIiwiZXhwIjoxNjg1NDExMzYzfQ.xqVxouTh7n_dizJ7z52SEh4mQ3J5q2Arr4AfEtrYX04';

    this.userApiService.getUsers(token)
      .subscribe(
        (data) => {
          console.log('Users:', data);
          this.users = data;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
}
