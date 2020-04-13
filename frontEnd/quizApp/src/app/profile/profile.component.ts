import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';

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
  edit: boolean = true;
  message = '';


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

  profileForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
  });

  updateUserInfo(id, data) {
    this.userInfo.editName(id, data)
      .subscribe(response => {
        console.log(response);
        this.message = 'Update was successful';
        location.reload();
      },
        error => {
          console.log(error);
        });
    
  }

  onSubmit() {
    this.updateUserInfo(this.currentUser.id, this.profileForm.value);
  }

  editProfile(): boolean {
    this.edit = !this.edit;
    return this.edit
  }

}