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
  public posts: any[];

  constructor(
    @Inject('BACKEND_API_URL') public apiUrl: string,
    public auth: AuthService,
    private postService: PostService,
    private socketService: SocketService
  ) {}

  ngOnInit() {
    this.socketService.onEvent('post').subscribe(data => {
      this.posts.push(data.createdPost);
    });
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data.posts;
    });
  }
}
