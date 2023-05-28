import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const newUser = this.registerForm.value;
    this.userService.register(newUser).subscribe(
      response => {
        console.log('Usuario registrado:', response);
        this.router.navigate(['/login']);
        // Realizar acciones adicionales después del registro exitoso, como redireccionar a una página de inicio de sesión.
      },
      error => {
        console.error('Error al registrar usuario:', error);
        // Manejar el error de registro, como mostrar un mensaje de error al usuario.
      }
    );
  }
}
