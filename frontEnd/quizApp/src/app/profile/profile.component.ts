import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

interface User {
  id: number,
  name: string,
  lastName: string,
  image: string,
  points: number
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  user: User;

  constructor(private token: TokenStorageService, private userInfo: UserService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.getUserInfo(this.currentUser.id);
  }

  getUserInfo(id) {
    this.userInfo.getUser(id)
      .subscribe(data => {
        this.user = data;
      },
        error => {
          console.log(error)
        });
  }
}