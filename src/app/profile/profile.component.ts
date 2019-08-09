import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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
  public loggedInUser = true; // can be improved
  public userId;
  public username = 'My Posts';
  public posts: any[];

  constructor(
    @Inject('BACKEND_API_URL') public apiUrl: string,
    private route: ActivatedRoute,
    private auth: AuthService,
    private postService: PostService,
    private socketService: SocketService
  ) {}

  ngOnInit() {
    this.socketService.onEvent('delete').subscribe(data => {
      console.log(data.message);
    });
    this.getUserProfile();
  }

  getUserProfile(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userId = params.get('userId');
      this.getUserPosts();
    });
    this.auth.getLoggedInUserId().subscribe(data => {
      if (this.userId) {
        if (this.userId === data.userId) {
          this.loggedInUser = true;
        } else {
          this.loggedInUser = false;
        }
      }
    });
  }

  getUserPosts(): void {
    this.postService.getUserPosts(this.userId).subscribe(
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
    this.postService.deletePost(postId).subscribe(() => {});
  }
}
