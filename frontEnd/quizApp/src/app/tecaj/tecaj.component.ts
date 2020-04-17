import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-tecaj',
  templateUrl: './tecaj.component.html',
  styleUrls: ['./tecaj.component.css']
})
export class TecajComponent implements OnInit {
  currentUser: any;
  constructor(private token: TokenStorageService, private userInfo: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

}
