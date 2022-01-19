import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService{
  auth(obj: any) {
    this.setEndpoint('usuarios'); // localhost:3000/login
    return this.post(obj);
  }
}
