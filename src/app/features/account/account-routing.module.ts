import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoadingComponent } from './../../common/loading/loading.component';
import { NotFoundComponent } from './../../common/not-found/not-found.component';



const routes: Routes = [
  {path: '',
   component: AccountComponent,
  children:[
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'register', component: RegisterComponent
    },
    {
      path: 'contacto',component: ContactoComponent
    },
    {
      path: 'loading', component: LoadingComponent
    },
    {
      path: '**', component: NotFoundComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
