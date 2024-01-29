import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  username:string="";
  storeService: StoreService;

  constructor(store: StoreService){
    this.storeService = store;
  }

  ngOnInit(): void {
      this.username = this.storeService.getUser();
  }
}
