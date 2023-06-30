import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login/login.component';

import { HeaderComponent } from './pages/auth/header/header.component';
import { MenuComponent } from './pages/auth/menu/menu.component';
import { CandidatoComponent } from './pages/auth/candidato/candidato.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { ResetPasswordComponent } from './pages/auth/login/reset-password/reset-password.component'
>>>>>>> jean
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './pages/auth/usuarios/usuarios.component';
import { PerfilCandidatoComponent } from './pages/auth/solicitud-candidato/perfil-candidato/perfil-candidato.component';
import { ObservacionesComponent } from './pages/auth/solicitud-candidato/observaciones/observaciones.component';
import { VerCandidatoComponent } from './pages/auth/solicitud-candidato/ver-candidato/ver-candidato.component';
import { InfoCandidatoComponent } from './pages/auth/solicitud-candidato/info-candidato/info-candidato.component';
import { SolicitudComponent } from './pages/auth/solicitud-candidato/solicitud/solicitud.component';

import { TableModule } from 'primeng/table';



<<<<<<< HEAD
import { ResetPasswordComponent } from './pages/auth/login/reset-password/reset-password.component';
import { VistaListaComponent } from './pages/auth/listas/vista-lista/vista-lista.component';
import { VistaIntegrantesComponent } from './pages/auth/listas/vista-integrantes/vista-integrantes.component'
import { SolicitudService } from './service/solicitud.service';


=======
=======
import { ResetPasswordComponent } from './pages/auth/login/reset-password/reset-password.component';
import { VistaListaComponent } from './pages/auth/listas/vista-lista/vista-lista.component';
import { VistaIntegrantesComponent } from './pages/auth/listas/vista-integrantes/vista-integrantes.component'
>>>>>>> main
>>>>>>> jean

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CandidatoComponent,
    HeaderComponent,
    MenuComponent,
    PerfilCandidatoComponent,
    ObservacionesComponent,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> jean
    VerCandidatoComponent,
    InfoCandidatoComponent,
    ObservacionesComponent,
    ResetPasswordComponent,
    UsuariosComponent,
    SolicitudComponent,

<<<<<<< HEAD
    ResetPasswordComponent,
    VistaListaComponent,
    VistaIntegrantesComponent
=======
=======
    ResetPasswordComponent,
    VistaListaComponent,
    VistaIntegrantesComponent
>>>>>>> main
>>>>>>> jean
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,

    FormsModule,
    ReactiveFormsModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule
=======
<<<<<<< HEAD
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,

=======
    ReactiveFormsModule
>>>>>>> main
>>>>>>> jean
  ],
  providers: [SolicitudService, SolicitudComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
