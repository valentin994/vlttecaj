import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  points: number;
  id:number;

  constructor(private tokenStorageService: TokenStorageService, private userInfo: UserService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.id = user.id
      this.username = user.username;
    }
    this.getUserInfo(this.id);
  }

  getUserInfo(id) {
    this.userInfo.getUser(id)
      .subscribe(data => {
        this.points = data.points;
      },
        error => {
          console.log(error)
        });
  }


  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
