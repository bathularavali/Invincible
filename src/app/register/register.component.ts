import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {};
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {}
  registerUser() {
    this.auth.registerUser(this.registerUserData).subscribe(res => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/']);
    });
  }
}
