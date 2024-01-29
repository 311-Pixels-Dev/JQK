import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterOutlet, Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
import UserModel from '../../models/UserModel';
import { StoreServiceService } from '../store.service';

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  readonly apiService: ApiService;
  readonly router: Router;
  readonly storeService: StoreService;

  username: string = "";
  password: string = "";

  constructor(apiService: ApiService, router: Router, storeService: StoreService){
    this.apiService = apiService;
    this.router = router;
    this.storeService = storeService;
  }

  async login() {
    let user: UserModel = await this.apiService.loginUser(this.username, this.password);
    console.log(user);
    this.storeService.saveUser(user);
    this.router.navigate(['final'])
  }
}
