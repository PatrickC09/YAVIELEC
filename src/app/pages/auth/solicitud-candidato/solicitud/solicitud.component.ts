import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatosService } from 'src/app/service/candidatos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent {
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
  }


  confirmarEliminacion() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Eliminar Lista',
      text: "¿Esta seguro de eliminar esta lista?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Lista Eliminada!',
          'Se ha eliminado la Lista con exito',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Lista no eliminada :)',
          'error'
        )
      }
    })
  }
}
