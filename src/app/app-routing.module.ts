import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login/login.component';
import { HeaderComponent } from './pages/auth/login/header/header.component';
import { CandidatoComponent } from './pages/auth/login/candidato/candidato.component';
import { ResetPasswordComponent } from './pages/auth/login/reset-password/reset-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'candidato', component: CandidatoComponent },
  { path: 'resetearContraseña', component:ResetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
