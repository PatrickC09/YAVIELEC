import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']
})
export class CandidatoComponent {
  openConfirmationDialog() {
    const requiredFields: HTMLInputElement[] = Array.from(document.querySelectorAll('input[required]'));
  
    const emptyFields = requiredFields.filter((field) => field.value.trim() === '');
  
    if (emptyFields.length > 0) {
      Swal.fire('Campos requeridos', 'Por favor, complete todos los campos requeridos.', 'error');
      return;
    }
  
    Swal.fire({
      title: '¿Está seguro de que quiere registrar esta lista?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        // Acciones cuando el usuario confirma
        Swal.fire('Registrado!', 'La lista ha sido registrada correctamente.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Acciones cuando el usuario cancela
        Swal.fire('Cancelado', 'No se ha registrado la lista.', 'error');
      }
    });
  }
  
}


