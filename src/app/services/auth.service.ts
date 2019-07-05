import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'api/auth/register';
  private loginUrl = 'api/auth/login';

  // There should be a better way of identifying the loggedIn user from the client
  private userIdUrl = '/api/user';

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(user): Observable<any> {
    return this.http.post<any>(this.registerUrl, user);
  }
  loginUser(user): Observable<any> {
    return this.http.post<any>(this.loginUrl, user);
  }
  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  getLoggedInUserId(): Observable<any> {
    return this.http.get<any>(this.userIdUrl);
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
