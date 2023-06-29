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

  constructor(private http: HttpClient) {
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

  updateLista(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  deleteCandidato(id: number) {
    const index = this.candidatos.findIndex((candidato) => candidato.id === id);
    if (index > -1) {
      this.candidatos.splice(index, 1);
    }
  }
}
