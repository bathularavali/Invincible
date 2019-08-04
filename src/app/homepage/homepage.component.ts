import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';

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
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postService.refreshNeeded$.subscribe(() => {
      this.getPosts();
    });

    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data.posts;
    });
  }
}
