import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login/login.component';
<<<<<<< HEAD

import { HeaderComponent } from './pages/auth/header/header.component';
import { MenuComponent } from './pages/auth/menu/menu.component';
import { CandidatoComponent } from './pages/auth/candidato/candidato.component';
import { SolicitudCandidatosComponent } from './pages/auth/solicitud-candidatos/solicitud-candidatos.component';
import { RouterModule } from '@angular/router';
import { PerfilCandidatoComponent } from './pages/auth/solicitud-candidatos/perfil-candidato/perfil-candidato.component';
import { ObservacionesComponent } from './pages/auth/solicitud-candidatos/observaciones/observaciones.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
=======
import { CandidatoComponent } from './pages/auth/login/candidato/candidato.component';
import { HeaderComponent } from './pages/auth/login/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ResetPasswordComponent } from './pages/auth/login/reset-password/reset-password.component'
>>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CandidatoComponent,
    HeaderComponent,
<<<<<<< HEAD
    MenuComponent,
    SolicitudCandidatosComponent,
    PerfilCandidatoComponent,
    ObservacionesComponent
=======
    ResetPasswordComponent
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    RouterModule,

    FormsModule,
    ReactiveFormsModule,
=======
    FormsModule,
    ReactiveFormsModule
>>>>>>> main
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
