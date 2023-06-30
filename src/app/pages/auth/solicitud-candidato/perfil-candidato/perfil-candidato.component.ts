import { Component } from '@angular/core';
<<<<<<< HEAD
import { CandidatoComponent } from '../../candidato/candidato.component';
import { SolicitudComponent } from '../solicitud/solicitud.component';
import { CandidatosService } from 'src/app/service/candidatos.service';
import { ActivatedRoute } from '@angular/router';
import { SolicitudService } from 'src/app/service/solicitud.service';
=======
import { Router } from '@angular/router';
import { CandidatosService } from 'src/app/service/candidatos.service';

>>>>>>> jean
@Component({
  selector: 'app-perfil-candidato',
  templateUrl: './perfil-candidato.component.html',
  styleUrls: ['./perfil-candidato.component.scss']
})
export class PerfilCandidatoComponent {
<<<<<<< HEAD
  id:any;
  lista:any;
  data:any;
  constructor(private solicitudService: SolicitudService){
    this.id =  this.solicitudService.getId()
    console.log(this.id);
    this.loadCandidato()    
  }

  loadCandidato() {
    this.solicitudService.getLista(this.id).subscribe(
      (res) => {
        this.lista = <any>res;
        this.data = Object.values(this.lista);
        console.log(this.data[0]);
        
      },
      (err) => console.log(err)
    );
=======
  candidatos: any[] = [];
  selectedCandidato: any;

  constructor(private candidatoService: CandidatosService, private router: Router) {
    this.candidatos = this.candidatoService.candidatos;
  }

  createCandidato() {
    this.candidatoService.selectedCandidato = null;
    this.router.navigate(['candidato']);
  }

  editCandidato(candidato: any) {
    this.candidatoService.selectedCandidato = candidato;
    this.router.navigate(['candidato']);
  }

  deleteCandidato(id: number) {
    this.candidatoService.deleteCandidato(id);
    console.log(this.selectedCandidato.candidatos);
>>>>>>> jean
  }
}
