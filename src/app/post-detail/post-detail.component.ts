import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public postId: string;
  public post: any;
  constructor(
    @Inject('BACKEND_API_URL') public apiUrl: string,
    private route: ActivatedRoute,
    public auth: AuthService,
    private postService: PostService,
    private socketService: SocketService
  ) {}

  ngOnInit() {
    this.socketService.onEvent('comment').subscribe(data => {
      this.post.comments = [...this.post.comments, data];
    });
    this.getPostDetail();
  }

  getPostDetail() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.postId = params.get('id');
      this.postService.getPost(this.postId).subscribe(data => {
        if (!data) {
          return;
        }
        this.post = data.post;
      });
    });
  }
}
