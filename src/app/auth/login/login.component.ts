import { Component } from '@angular/core';
import { LoginUserService } from '../../service/login.user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };


  constructor(private loginUserService: LoginUserService) { }

  //jsonCredentials = JSON.stringify(this.credentials);
  

  login(){
    this.loginUserService.login(this.credentials).subscribe(
      response => {
        // Manejar la respuesta del inicio de sesión y el token aquí
        const token = response;
        console.log(response)
        this.loginUserService.setToken(token)
        console.log('Token:', token);
        //console.log(response)
      },
      error => {
        // Manejar errores de inicio de sesión aquí
         console.error('Error de inicio de sesión:', error);
      }
    )
  }

}
