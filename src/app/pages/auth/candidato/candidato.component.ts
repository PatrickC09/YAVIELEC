import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CandidatosService } from './candidatos.service';


@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']
})
export class CandidatoComponent {
  nombreLista: string = '';
  datosPresidenteNombre: string = '';
  datosPresidenteCorreo: string = '';
  datosViceNombre: string = '';
  datosViceCorreo: string = '';
  eslogan: string = '';
  datosSecretarioNombre: string = '';
  datosSecretarioCorreo: string = '';
  datosTesoreroNombre: string = '';
  datosTesoreroCorreo: string = '';
  numeroLista: number = 0;
  datosVocal1Nombre: string = '';
  datosVocal1Correo: string = '';
  datosVocal2Nombre: string = '';
  datosVocal2Correo: string = '';
  datosVocal3Nombre: string = '';
  datosVocal3Correo: string = '';
  logoLista: string = '';
  registrarPropuesta: string = '';
  
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private candidatosService: CandidatosService) {
    if (this.candidatosService.selectedCandidato){
      this.form = formBuilder.group({
        nombreLista: [this.candidatosService.selectedCandidato.nombreLista, [Validators.required, Validators.minLength(2)]],
        datosPresidenteNombre: [this.candidatosService.selectedCandidato.nombreLista, [Validators.required, Validators.minLength(2)]],
        datosPresidenteCorreo: [this.candidatosService.selectedCandidato.nombreLista, [Validators.required, Validators.email]],
        datosViceNombre: [this.candidatosService.selectedCandidato.nombreLista, [Validators.required, Validators.minLength(2)]],
        datosViceCorreo: [this.candidatosService.selectedCandidato.nombreLista, [Validators.required, Validators.email]],
        eslogan: [this.candidatosService.selectedCandidato.nombreLista, [Validators.required, Validators.minLength(2)]],
        datosSecretarioNombre: [this.candidatosService.selectedCandidato.nombreLista, [Validators.required, Validators.minLength(2)]],
        datosSecretarioCorreo: [this.candidatosService.selectedCandidato.nombreLista, [Validators.required, Validators.email]],
        datosTesoreroNombre: [this.candidatosService.selectedCandidato.nombreLista, [Validators.required, Validators.minLength(2)]],
        datosTesoreroCorreo: [this.candidatosService.selectedCandidato.nombreLista, [Validators.required, Validators.email]],
        numeroLista: [this.candidatosService.selectedCandidato.nombreLista, [Validators.required, Validators.min(1)]],
        datosVocal1Nombre: [this.candidatosService.selectedCandidato.nombreLista, [Validators.required, Validators.minLength(2)]],
        datosVocal1Correo: [this.candidatosService.selectedCandidato.nombreLista, [Validators.required, Validators.email]],
        datosVocal2Nombre: [this.candidatosService.selectedCandidato.nombreLista, [Validators.required, Validators.minLength(2)]],
        datosVocal2Correo: [this.candidatosService.selectedCandidato.nombreLista, [Validators.required, Validators.email]],
        datosVocal3Nombre: [this.candidatosService.selectedCandidato.nombreLista, [Validators.required, Validators.minLength(2)]],
        datosVocal3Correo: [this.candidatosService.selectedCandidato.nombreLista, [Validators.required, Validators.email]],
        logoLista: [this.candidatosService.selectedCandidato.nombreLista, [Validators.required, Validators.minLength(2)]],
        registrarPropuesta: [this.candidatosService.selectedCandidato.nombreLista, [Validators.required, Validators.minLength(2)]],
      })
    } else {
      this.form = formBuilder.group({
        nombreLista: ['', [Validators.required, Validators.minLength(2)]],
        datosPresidenteNombre: ['', [Validators.required, Validators.minLength(2)]],
        datosPresidenteCorreo: ['', [Validators.required, Validators.email]],
        datosViceNombre: ['', [Validators.required, Validators.minLength(2)]],
        datosViceCorreo: ['', [Validators.required, Validators.email]],
        eslogan: ['', [Validators.required, Validators.minLength(2)]],
        datosSecretarioNombre: ['', [Validators.required, Validators.minLength(2)]],
        datosSecretarioCorreo: ['', [Validators.required, Validators.email]],
        datosTesoreroNombre: ['', [Validators.required, Validators.minLength(2)]],
        datosTesoreroCorreo: ['', [Validators.required, Validators.email]],
        numeroLista: ['', [Validators.required, Validators.min(1)]],
        datosVocal1Nombre: ['', [Validators.required, Validators.minLength(2)]],
        datosVocal1Correo: ['', [Validators.required, Validators.email]],
        datosVocal2Nombre: ['', [Validators.required, Validators.minLength(2)]],
        datosVocal2Correo: ['', [Validators.required, Validators.email]],
        datosVocal3Nombre: ['', [Validators.required, Validators.minLength(2)]],
        datosVocal3Correo: ['', [Validators.required, Validators.email]],
        logoLista: ['', [Validators.required, Validators.minLength(2)]],
        registrarPropuesta: ['', [Validators.required, Validators.minLength(2)]],
      })
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.addCandidato();
    } else {
      alert('Formulario No Valido');
    }
  }

  validateForm() {
    if (this.nombreLista === '' && this.nombreLista.length <= 3) {

    }
  }

  addCandidato() {
    this.candidatosService.addCandidato(this.form.value);
    console.log(this.candidatosService.candidatos);
  }

  updateCandidatos() {
    this.candidatosService.updateCandidato(this.idField.value, this.form.value);
    console.log(this.candidatosService.candidatos);
  }

  get idField() {
    return this.form.controls['id'];
  }

}


