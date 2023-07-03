import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private error: any;
  private msg: any;
  private data:any;
  private msgd: any;
 // private isLog:boolean = false;
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      correo: ['', Validators.required],
      clave: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.login()
    } else {
      alert('Login incorrecto')
    }
  }

  /**
   * ingresar al sistema por rutas
   */
  login() {
    // this.loginService.login(this.loginForm.value).subscribe(
    //   response => {
    //     this.router.navigate(['solicitud']);
    //     console.log(response);
    //   }
     
    // )
    this.loginService.login(this.loginForm.value).subscribe(
      (res) => {
        this.data = Object.values(res)
        this.msgd = Object.values(this.data[0]);
        localStorage.setItem('toke', this.msgd[0])
        this.router.navigate(['solicitud']);
        console.log(this.msgd[0]);
      },
      (err) => {
        this.error = Object.values(err)
        this.msg = Object.values(this.error[7])
        alert(this.msg[1]);
      }

    );

  }

  logOut(){
    const token = localStorage.removeItem('toke');
    alert('sesion cerrada')
  }

}
