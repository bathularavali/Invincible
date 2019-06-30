import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Post } from '../post';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private loggedInUser = true; // can be improved
  private userId;
  private username = 'My Posts';
  private posts: Post[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private postService: PostService
  ) {}

  ngOnInit() {
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
          if (err.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      }
    );
  }

  deletePost(postId: string): void {
    this.postService.deletePost(postId).subscribe(() => {
      window.location.reload();
    });
  }
}
