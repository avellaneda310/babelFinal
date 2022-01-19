import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactoComponent } from './pages/contacto/contacto.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, ContactoComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ],
  exports: [LoginComponent, RegisterComponent, ContactoComponent]
})
export class AccountModule { }
