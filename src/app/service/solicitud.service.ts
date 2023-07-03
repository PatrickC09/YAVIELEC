import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  url = 'http://localhost:3000/api/v1/listas';
  listas: any[] = [];
  id: any = null;

  constructor(private http: HttpClient) {
    this.loadListas();
  }

  loadListas() {
    return this.http.get(this.url);
  }

  addCandidato(payload: any) {
    this.listas.push(payload);
  }

  setId(id:string){
    this.id = id
  }

  getId():string{
    return this.id
  }
  getLista(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  deleteLista(id: number) {
    const index = this.listas.findIndex((listas) => listas.id === id);
    if (index > -1) {
      this.listas.splice(index, 1);
    }
  }
}
