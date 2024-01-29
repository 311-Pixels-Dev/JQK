import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-playlist-user',
  standalone: true,
  imports: [],
  templateUrl: './playlist-user.component.html',
  styleUrl: './playlist-user.component.css'
})
export class PlaylistUserComponent implements OnInit {
  username:string="";
  email:string="";
  storeService: StoreService;

  constructor(store: StoreService){
    this.storeService = store;
  }

  ngOnInit(): void {
      this.username = this.storeService.getUser();
      this.email = this.storeService.getMail();
  }
}
