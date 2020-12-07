import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['/user/dashboard']);
    }
  }

  auth() {
    this.authService.isAuthenticated = true;
  }
}
