import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterService } from './../../../../service/account/register.service';

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
  registerform: FormGroup = new FormGroup(this.formObject);


  constructor(private service: RegisterService) { }


  ngOnInit(): void {
    this.registerform = new FormGroup(this.formObject);
  }

  async register() {
    console.log(this.registerform);
    try {
      const result: any = await this.service.postRegister(this.registerform.value);
    }
    catch (error) {
      return error
    }
  }

}