import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterService } from './../../../../service/account/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formObject: any = {
    email: new FormControl('', []),
    nombre: new FormControl('', []),
    password: new FormControl('', [])
  }
  form: FormGroup = new FormGroup(this.formObject);


  constructor(private service: RegisterService, private router: Router) { }


  ngOnInit(): void {
    //this.form = new FormGroup(this.formObject);
    this.form
  }

  async register() {
    console.log(this.form);
    console.log("hola")
    try {
      const result: any = await this.service.usuarios(this.form.value);
      localStorage.setItem('JWT', result.JWT);
      localStorage.setItem('usuario', JSON.stringify(result.info))
      console.log(result)

    }
    catch (error) {
      return error
    }
  }

}