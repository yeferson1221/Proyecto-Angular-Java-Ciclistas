import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component'
import { ListUsersComponent } from './list-users/list-users.component'
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'login', component: LoginComponent },
  { path:'users', component: ListUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
