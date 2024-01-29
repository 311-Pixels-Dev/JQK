import { Injectable } from '@angular/core';
import UserModel from '../models/UserModels';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  saveUser(user: UserModel) {
    localStorage.setItem('userid', user.id);
    localStorage.setItem('username', user.username);
  }
}
