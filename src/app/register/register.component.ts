import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerUserData: FormGroup;
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
    this.registerUserData = this.formBuilder.group({
      username: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }
  get f() {
    return this.registerUserData.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerUserData.invalid) {
      return;
    }

    this.loading = true;
    this.auth.registerUser(this.registerUserData).subscribe(res => {
      localStorage.setItem("token", res.token);
      this.router.navigate(["/"]);
    });
  }
  /* registerUser() {
    this.auth.registerUser(this.registerUserData).subscribe(res => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/']);
    });
  }*/
}