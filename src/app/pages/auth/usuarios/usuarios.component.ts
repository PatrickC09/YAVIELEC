import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { UsuariosService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent {
  listarUsuario:any;
  data: any;
  constructor(private usuarioService: UsuariosService) {
    this.loadUsuario()
  }

  loadUsuario() {
    this.usuarioService.loadUsuarios().subscribe(
      (res) => {
        this.listarUsuario = <any>res;
        console.log(this.listarUsuario);
        this.data = Object.values(this.listarUsuario);
        this.data = Object.values(this.data[0]);
        console.log(this.data);
      },
      (err) => console.log(err)
    );
  }
  confirmarEliminacion() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Eliminar Usuario',
        text: '¿Esta seguro de eliminar este usuario?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Usuario Eliminado!',
            'Se ha eliminado el usuario con exito',
            'success'
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Usuario no eliminado :)',
            'error'
          );
        }
      });
  }

  exportToExcel(): void {
    // Datos de ejemplo, reemplázalos con los datos de tu tabla
    const usuarios = [
      {
        CI: 'Usuario 1',
        Nombres: 'Augusto Cesar Veintimilla Tercero',
        Carrera: 'Arte Culinario',
        Nivel: '1',
      },
    ];

    // Crea un nuevo libro de trabajo de Excel
    const workbook = XLSX.utils.book_new();

    // Crea una hoja de trabajo y asigna los datos de la tabla a la misma
    const worksheet = XLSX.utils.json_to_sheet(usuarios);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Usuarios');

    // Genera el archivo Excel
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    const data: Blob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
    });

    // Guarda el archivo utilizando FileSaver.js
    saveAs(data, 'usuarios.xlsx');
  }
}
