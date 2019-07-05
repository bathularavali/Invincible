import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _refreshNeeded$ = new Subject<void>();
  private endpoint = 'api';

  constructor(private http: HttpClient) {}

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  getPosts(): Observable<any> {
    return this.http.get(this.endpoint);
  }

  createPost(formData): Observable<any> {
    return this.http.post<any>(this.endpoint, formData).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
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
    return this.http.delete(`${this.endpoint}/${postId}`).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  createComment(formData, postId: string) {
    return this.http
      .post<any>(`${this.endpoint}/${postId}/comment`, formData)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }
}
