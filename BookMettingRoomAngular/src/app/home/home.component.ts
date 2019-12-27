import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  profile:any;

  constructor(private service: UserService, private router: Router, private token: TokenStorageService) { }


  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      email: this.token.getEmail(),
      authorities: this.token.getAuthorities()
    };
    let resp = this.service.getProfile();
    resp.subscribe((data) => this.profile = data);
  }

  onLogout() {
    this.token.signOut();
    this.router.navigate(['home'])
    window.location.reload();
  }
}