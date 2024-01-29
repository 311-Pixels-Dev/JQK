import { Injectable } from '@angular/core';
import UserModel from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

  constructor() { }

  saveUser(user: UserModel) {
    localStorage.setItem('userid', user.id);
    localStorage.setItem('username', user.username);
  }
}
