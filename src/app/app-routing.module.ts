import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login/login.component';
import { HeaderComponent } from './pages/auth/header/header.component';
import { MenuComponent } from './pages/auth/menu/menu.component';
import { CandidatoComponent } from './pages/auth/candidato/candidato.component';
import { SolicitudCandidatosComponent } from './pages/auth/solicitud-candidatos/solicitud-candidatos.component';
import { PerfilCandidatoComponent } from './pages/auth/solicitud-candidatos/perfil-candidato/perfil-candidato.component';
import { ObservacionesComponent } from './pages/auth/solicitud-candidatos/observaciones/observaciones.component';



import { ResetPasswordComponent } from './pages/auth/login/reset-password/reset-password.component';
import { VistaListaComponent } from './pages/auth/listas/vista-lista/vista-lista.component';
import { VistaIntegrantesComponent } from './pages/auth/listas/vista-integrantes/vista-integrantes.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'candidato', component: CandidatoComponent },
  { path: 'solicitud', component: SolicitudCandidatosComponent },
  { path: 'perfil-candidato', component: PerfilCandidatoComponent },
  { path: 'observaciones', component: ObservacionesComponent },
  { path: 'resetearContraseña', component: ResetPasswordComponent },
  { path: 'vista-lista', component: VistaListaComponent },
  { path: 'vista-integrantes', component: VistaIntegrantesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
