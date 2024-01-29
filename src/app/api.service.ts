import { Injectable } from '@angular/core';
import UserModel from '../models/UserModel';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl : string = "http://localhost:8090";

  async loginUser(username: string, password: string): Promise<UserModel> {
    let response = await axios.post(this.baseUrl + "/api/collections/users/auth-with-password", {
      identity: username,
      password: password
    });

    let user: UserModel = response.data.record;

    return user;
  }

  constructor(){

  }
}
