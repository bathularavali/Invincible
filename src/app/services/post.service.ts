import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // private _refreshNeeded$ = new Subject<void>();
  private endpoint = this.apiUrl;

  constructor(
    @Inject('BACKEND_API_URL') private apiUrl: string,
    private http: HttpClient
  ) {}

  getPosts(): Observable<any> {
    return this.http.get(`${this.endpoint}/api`);
  }

  createPost(formData): Observable<any> {
    return this.http.post<any>(`${this.endpoint}/api`, formData);
  }

  getPost(postId: string): Observable<any> {
    return this.http.get(`${this.endpoint}/api/post/${postId}`);
  }

  getUserPosts(userId?: string): Observable<any> {
    if (userId) {
      return this.http.get(`${this.endpoint}/api/${userId}/posts`);
    }
    return this.http.get(`${this.endpoint}/api/posts`);
  }

  deletePost(postId: string): Observable<any> {
    return this.http.delete(`${this.endpoint}/api/${postId}`, {
      responseType: 'text'
    });
  }

  createComment(formData, postId: string) {
    return this.http.post<any>(
      `${this.endpoint}/api/${postId}/comment`,
      formData
    );
  }
}
