import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component'
import { ListUsersComponent } from './list-users/list-users.component'
import { RegisterComponent } from './auth/register/register.component'
const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path:'login', component: LoginComponent },
  { path:'users', component: ListUsersComponent },
  { path:'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
