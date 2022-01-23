import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './../../../../service/account/login.service';
import { SwalService } from './../../../../service/swal.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loaded: boolean = false;

  formObject: any = {
    email: new FormControl('', [
      Validators.required
    ]),
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(25)
    ])
  }
  form: FormGroup = new FormGroup(this.formObject);
  constructor(private service: LoginService, private swal: SwalService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup(this.formObject);
    this.loaded = true;
  }
  verifyField(field: string): string {
    let mensaje = ``;
    const control = this.form.controls[field];
    control.status === 'INVALID' && control.touched
      ? (mensaje = `${field} es obligatorio`)
      : '';
    return mensaje;
  }
   async login() {
    console.log("hola");
    try {
      const result: any =  await this.service.auth(this.form.value);
      this.swal.normalMessage({ html: 'Sesion Iniciada' });


      let status = false;
      
      localStorage.setItem('JWT', result.JWT) 
      localStorage.setItem('auth', JSON.stringify(result.info))
      this.router.navigate(['contacto']);
      

      console.log(result)
      
    }
    catch (e) {
      await this.swal.normalMessage({ html: 'Usuario o password incorrectos', icon: 'error' });
    }
  }
}



