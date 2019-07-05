import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedInUser = true; // can be improved
  userId;
  username = 'My Posts';
  posts: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postService.refreshNeeded$.subscribe(() => {
      this.getUserProfile();
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
          if (err.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      }
    );
  }

  deletePost(postId: string): void {
    this.postService.deletePost(postId).subscribe(() => {});
  }
}
