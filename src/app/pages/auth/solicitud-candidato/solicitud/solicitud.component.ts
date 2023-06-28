import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatosService } from 'src/app/service/candidatos.service';
import { SolicitudService } from 'src/app/service/solicitud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss'],
})
export class SolicitudComponent {
  data: any;
  tipoLista: any;
  listarUsuario: any;
  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    buttonsStyling: false,
  });
  constructor(private candidatoService: SolicitudService) {
    this.loadCandidato();
  }
  loadCandidato() {
    this.candidatoService.loadListas().subscribe(
      (res) => {
        this.listarUsuario = <any>res;
        console.log(this.listarUsuario);
        this.data = Object.values(this.listarUsuario);
        this.data = Object.values(this.data[0]);
        this.tipoLista = Object.values(this.data[0].tipoLista)
      },
      (err) => console.log(err)
    );
  }

  confirmarEliminacion() {
    this.swalWithBootstrapButtons
      .fire({
        title: 'Eliminar Lista',
        text: '¿Esta seguro de eliminar esta lista?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.swalWithBootstrapButtons.fire(
            'Lista Eliminada!',
            'Se ha eliminado la Lista con exito',
            'success'
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          this.swalWithBootstrapButtons.fire(
            'Cancelado',
            'Lista no eliminada :)',
            'error'
          );
        }
      });
  }
  editarLista(id:string) {

    console.log(    this.candidatoService.updateLista(id));

  }
}
export interface Lista {
  data: any;
}
