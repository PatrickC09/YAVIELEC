import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login/login.component';


import { HeaderComponent } from './pages/auth/header/header.component';
import { MenuComponent } from './pages/auth/menu/menu.component';
import { CandidatoComponent } from './pages/auth/candidato/candidato.component';
import { SolicitudCandidatosComponent } from './pages/auth/solicitud-candidatos/solicitud-candidatos.component';
import { RouterModule } from '@angular/router';
import { PerfilCandidatoComponent } from './pages/auth/solicitud-candidatos/perfil-candidato/perfil-candidato.component';
import { ObservacionesComponent } from './pages/auth/solicitud-candidatos/observaciones/observaciones.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { VerCandidatoComponent } from './pages/auth/solicitud-candidatos/ver-candidato/ver-candidato.component';
import { InfoCandidatoComponent } from './pages/auth/solicitud-candidatos/info-candidato/info-candidato.component';

import { ResetPasswordComponent } from './pages/auth/login/reset-password/reset-password.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CandidatoComponent,
    HeaderComponent,
    MenuComponent,
    SolicitudCandidatosComponent,
    PerfilCandidatoComponent,
    ObservacionesComponent,
    VerCandidatoComponent,
    InfoCandidatoComponent,
    ObservacionesComponent,
    ResetPasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,

    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
