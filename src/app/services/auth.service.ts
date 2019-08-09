import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = `${this.apiUrl}/api/auth/register`;
  private loginUrl = `${this.apiUrl}/api/auth/login`;

  constructor(
    @Inject('BACKEND_API_URL') private apiUrl: string,
    private http: HttpClient,
    private router: Router
  ) {}

  registerUser(user): Observable<any> {
    return this.http.post<any>(this.registerUrl, user);
  }
  loginUser(user): Observable<any> {
    return this.http.post<any>(this.loginUrl, user);
  }
  logoutUser(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  getLoggedInUserId(): string {
    return localStorage.getItem('userId');
  }
  getToken(): string {
    return localStorage.getItem('token');
  }
}
