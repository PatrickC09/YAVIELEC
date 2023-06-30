import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lista } from '../interface/listas.interface';

@Injectable({
  providedIn: 'root',
})
export class CandidatosService {
  url = 'http://localhost:3000/api/v1/listas';
  candidatos: any[] = [];
  selectedCandidato: any = null;

<<<<<<< HEAD
  constructor(private http: HttpClient) {
=======
  constructor() { 
    this.loadCandidatos();
   }

   private loadCandidatos() {
    this.candidatos = [];
    this.candidatos.push(
      {
        id: 1,
        nombre: 'Yavielec',
        datosPresiNombre: 'Juan Pérez',
        datosPresiCorreo: 'juanperez@example.com',
        datosViceNombre: 'María García',
        datosViceCorreo: 'mariagarcia@example.com',
        slogan: 'PERUANOS',
        datosSecretarioNombre: 'Carlos Rodríguez',
        datosSecretarioCorreo: 'carlosrodriguez@example.com',
        datosTesoreroNombre: 'Laura López',
        datosTesoreroCorreo: 'lauralopez@example.com',
        nro_lista: 2,
        datosVocal1Nombre: 'Andrés Martínez',
        datosVocal1Correo: 'andresmartinez@example.com',
        datosVocal2Nombre: 'Ana Sánchez',
        datosVocal2Correo: 'anasanchez@example.com',
        datosVocal3Nombre: 'Manuel González',
        datosVocal3Correo: 'manuelgonzalez@example.com',
        logo: 'asas',
        propuesta: 'Joder claro que si',
        estado: false
      },
      {id: 2, nombre: 'AAAAAAAA', nro_lista: '3', estado: 'Desaprobado', propuesta: 'Joselito xd'},
    );
   }

  addCandidato(payload: any) {
    this.candidatos.push(payload);
>>>>>>> jean
  }

  loadCandidatos() {
    return this.http.get(this.url);
    this.candidatos = [];
    this.candidatos.push();
  }

  addCandidato(payload: any) {
    let data = Object.values(payload)
    console.log("Data: "+ data);
    return this.http.post(this.url , payload);
  }

  getLista(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  deleteCandidato(id: number) {
    const index = this.candidatos.findIndex((candidato) => candidato.id === id);
    if (index > -1) {
      this.candidatos.splice(index, 1);
    }
  }
}
