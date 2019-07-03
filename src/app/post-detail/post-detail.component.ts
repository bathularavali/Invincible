import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  private postId: string;
  private post: Post;
  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.postId = params.get('id');
      this.postService.getPost(this.postId).subscribe(data => {
        this.post = data.post;
      });
    });
  }
}
