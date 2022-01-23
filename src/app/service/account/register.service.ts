import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends BaseService {

  usuarios(obj: any) {
    this.setEndpoint('usuarios'); // localhost:3000/login
    return this.post(obj);
  }
}
