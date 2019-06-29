import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts = this.socket.fromEvent<Post>('post');
  private endpoint = 'http://localhost:3000';

  constructor(private http: HttpClient, private socket: Socket) {}

  getPosts(): Observable<any> {
    return this.http.get(`${this.endpoint}/posts`);
  }
  // getPost() {
  //   this.socket.emit('getPost');
  // }
  createPost(formData) {
    return this.http
      .post<any>(`${this.endpoint}/posts/create`, formData)
      .subscribe(res => console.log(res), err => console.log(err));
  }
}
