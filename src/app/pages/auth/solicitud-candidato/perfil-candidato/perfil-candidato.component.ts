import { Component } from '@angular/core';
import { CandidatoComponent } from '../../candidato/candidato.component';
import { SolicitudComponent } from '../solicitud/solicitud.component';
import { CandidatosService } from 'src/app/service/candidatos.service';
import { ActivatedRoute } from '@angular/router';
import { SolicitudService } from 'src/app/service/solicitud.service';
@Component({
  selector: 'app-perfil-candidato',
  templateUrl: './perfil-candidato.component.html',
  styleUrls: ['./perfil-candidato.component.scss']
})
export class PerfilCandidatoComponent {
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
  }
}
