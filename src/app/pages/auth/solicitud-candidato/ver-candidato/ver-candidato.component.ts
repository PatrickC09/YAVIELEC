import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-candidato',
  templateUrl: './ver-candidato.component.html',
  styleUrls: ['./ver-candidato.component.scss']
})

export class VerCandidatoComponent {
  confirmarEliminacion() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Eliminar Candidato',
      text: "¿Esta seguro de eliminar este candidato?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Candidato Eliminado!',
          'El candidado se ha eliminado con exito',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Candidato no eliminado :)',
          'error'
        )
      }
    })
  }
}
