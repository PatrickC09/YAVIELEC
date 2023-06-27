import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login/login.component';
<<<<<<< HEAD
import { HeaderComponent } from './pages/auth/header/header.component';
import { MenuComponent } from './pages/auth/menu/menu.component';
import { CandidatoComponent } from './pages/auth/candidato/candidato.component';
import { SolicitudCandidatosComponent } from './pages/auth/solicitud-candidatos/solicitud-candidatos.component';
import { PerfilCandidatoComponent } from './pages/auth/solicitud-candidatos/perfil-candidato/perfil-candidato.component';
import { ObservacionesComponent } from './pages/auth/solicitud-candidatos/observaciones/observaciones.component';


=======
import { HeaderComponent } from './pages/auth/login/header/header.component';
import { CandidatoComponent } from './pages/auth/login/candidato/candidato.component';
import { ResetPasswordComponent } from './pages/auth/login/reset-password/reset-password.component';
>>>>>>> main

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'candidato', component: CandidatoComponent },
<<<<<<< HEAD
  { path: 'solicitud', component: SolicitudCandidatosComponent },
  { path: 'perfil-candidato', component: PerfilCandidatoComponent },
  { path: 'observaciones', component: ObservacionesComponent },
=======
  { path: 'resetearContraseña', component:ResetPasswordComponent }
>>>>>>> main
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
