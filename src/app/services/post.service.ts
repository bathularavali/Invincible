import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private endpoint = 'https://invincible-backend.herokuapp.com/api';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.endpoint);
  }
  createPost(formData): Observable<any> {
    return this.http.post<any>(this.endpoint, formData);
  }
  getPost(postId: string): Observable<any> {
    return this.http.get(`${this.endpoint}/post/${postId}`);
  }
  getUserPosts(userId?: string): Observable<any> {
    if (userId) {
      return this.http.get(`${this.endpoint}/${userId}/posts`);
    }
    return this.http.get(`${this.endpoint}/posts`);
  }
  deletePost(postId: string): Observable<any> {
    return this.http.delete(`${this.endpoint}/${postId}`);
  }
}
