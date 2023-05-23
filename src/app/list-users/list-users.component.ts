import { Component } from '@angular/core';
import { User } from '../../models/users.model';
import { LoginUserService } from '../service/login.user.service'
import { CyclingUsersService } from '../service/cycling.users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {

  users: User[] = []; // Declara la propiedad para almacenar la lista de usuarios
  token: string = "token";
  constructor(private userApiService: CyclingUsersService,
              private loginUserService: LoginUserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
    // Obtén el token de autenticación (de tu sistema de autenticación)
    this.token = this.loginUserService.getToken();

    this.userApiService.getUsers(this.token)
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

  public logout(): void {
    this.loginUserService.removeToken();
  }

}
