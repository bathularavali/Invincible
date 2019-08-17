import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public userId;
  public viewedUserId;
  public username = '';
  public posts: any[] = [];

  constructor(
    @Inject('BACKEND_API_URL') public apiUrl: string,
    private route: ActivatedRoute,
    private auth: AuthService,
    private postService: PostService,
    private socketService: SocketService
  ) {}

  ngOnInit() {
    this.userId = this.auth.getLoggedInUserId();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.viewedUserId = params.get('userId');
      this.getUserPosts();
    });
    this.socketService.onEvent('post').subscribe(data => {
      if (data.createdPost.user._id === this.viewedUserId) {
        this.posts = [data.createdPost, ...this.posts];
      }
    });
    this.socketService.onEvent('delete').subscribe(data => {
      this.posts = this.posts.filter(post => post._id !== data.postId);
    });
  }

  getUserPosts(): void {
    this.postService.getUserPosts(this.viewedUserId).subscribe(
      data => {
        this.posts = data.posts;
        this.username = data.user.username;
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 400) {
            this.auth.logoutUser();
          }
        }
      }
    );
  }

  deletePost(postId: string): void {
    this.postService.deletePost(postId).subscribe();
  }
}
