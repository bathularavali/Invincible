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
  private postId: string;
  public post: any;
  public deletedPostMessage: string;

  constructor(
    @Inject('BACKEND_API_URL') private apiUrl: string,
    private route: ActivatedRoute,
    public auth: AuthService,
    private postService: PostService,
    private socketService: SocketService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.postId = params.get('id');
    });
    this.getPostDetail();
    this.socketService.onEvent('comment').subscribe(data => {
      this.post.comments = [...this.post.comments, data];
    });
    this.socketService.onEvent('delete').subscribe(data => {
      if (data.postId === this.postId) {
        this.deletedPostMessage = 'This Post has been deleted';
      }
    });
  }

  getPostDetail() {
    this.postService.getPost(this.postId).subscribe(data => {
      if (!data) {
        // tslint:disable-next-line: quotemark
        this.deletedPostMessage = "This Post doesn't exist";
      } else {
        this.post = data.post;
      }
    });
  }
}
