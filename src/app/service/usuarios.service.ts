import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  url = 'http://localhost:3000/api/v1/usuarios';
  usuarios: any[] = [];
  selectedUsuario: any = null;

  constructor(private http: HttpClient) {
    this.loadUsuarios();
  }

  loadUsuarios() {
    return this.http.get(this.url);
  }

  addCandidato(payload: any) {
    this.usuarios.push(payload);
  }

  updateLista(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  deleteLista(id: number) {
    const index = this.usuarios.findIndex((listas) => listas.id === id);
    if (index > -1) {
      this.usuarios.splice(index, 1);
    }
  }
}
