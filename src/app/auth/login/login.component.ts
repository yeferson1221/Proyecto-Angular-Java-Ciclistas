import { Component } from '@angular/core';
import { LoginUserService } from '../../service/login.user.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;

  
  constructor(private loginUserService: LoginUserService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }            
  login() {
    const credentials = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    };
  
    this.loginUserService.login(credentials).subscribe(
      response => {
        // Manejar la respuesta del inicio de sesión y el token aquí
        const token = response;
        console.log(response);
        
        if (token === 'FAIL TOKEN') {
          // Mostrar error en caso de que el token sea 'fail'
          console.error('Error de inicio de sesión: Token inválido');
          alert('Error iniciando sesión');
        } else {
          this.loginUserService.setToken(token);
          console.log('Token:', token);
          this.router.navigate(['/users']);
        }
      },
      error => {
        // Manejar errores de inicio de sesión aquí
        console.error('Error de inicio de sesión:', error);
        alert('Error iniciando sesión');
      }
    );
  }

}
