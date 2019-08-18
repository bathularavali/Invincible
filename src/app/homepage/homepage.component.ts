import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  private posts: any[] = [];

  constructor(
    @Inject('BACKEND_API_URL') private apiUrl: string,
    private auth: AuthService,
    private postService: PostService,
    private socketService: SocketService
  ) {}

  ngOnInit() {
    this.socketService.onEvent('post').subscribe(data => {
      this.posts = [data.createdPost, ...this.posts];
    });
    this.socketService.onEvent('delete').subscribe(data => {
      this.posts = this.posts.filter(post => post._id !== data.postId);
    });
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data.posts;
    });
  }
}
