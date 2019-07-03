import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginUserData: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = "";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.loginUserData = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }
  get f() {
    return this.loginUserData.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginUserData.invalid) {
      return;
    }

    this.loading = true;
    this.auth.loginUser(this.loginUserData).subscribe(res => {
      localStorage.setItem("token", res.token);
      this.router.navigate(["/"]);
    });
  }
  /* loginUser() {
    this.auth.loginUser(this.loginUserData).subscribe(res => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/']);
    });
  }*/
}