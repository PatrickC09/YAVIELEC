import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login/login.component';
import { CandidatoComponent } from './pages/auth/login/candidato/candidato.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CandidatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
