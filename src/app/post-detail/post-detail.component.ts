import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  postId: string;
  post: any;
  constructor(
    private route: ActivatedRoute,
    public auth: AuthService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postService.refreshNeeded$.subscribe(() => {
      this.getPostDetail();
    });
    this.getPostDetail();
  }

  getPostDetail() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.postId = params.get('id');
      this.postService.getPost(this.postId).subscribe(data => {
        this.post = data.post;
        this.post.comments.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      });
    });
  }
}
