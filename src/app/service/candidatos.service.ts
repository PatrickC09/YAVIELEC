import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {
  candidatos: any[] = [];
  selectedCandidato: any = null;

  constructor() { 
    this.loadCandidatos();
   }

   private loadCandidatos() {
    this.candidatos = [];
    this.candidatos.push(
      {nombreLista: 'Yavielec'},
    );
   }

  addCandidato(payload: any) {
    this.candidatos.push(payload);
  }

  updateCandidato(id: number, payload: any) {
    const index = this.candidatos.findIndex(candidato => candidato.id === id);
    this.candidatos[index] = payload;
  }

  deleteCandidato(id: number) {
    const index = this.candidatos.findIndex(candidato => candidato.id === id);
    if (index > -1) {
      this.candidatos.splice(index, 1);
    }
  }
}
