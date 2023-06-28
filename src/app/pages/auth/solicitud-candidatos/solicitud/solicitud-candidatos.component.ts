import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitud-candidatos',
  templateUrl: './solicitud-candidatos.component.html',
  styleUrls: ['./solicitud-candidatos.component.scss']
})
export class SolicitudCandidatosComponent {
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
