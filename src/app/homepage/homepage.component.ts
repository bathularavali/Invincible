import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  private posts: Post[];

  constructor(private auth: AuthService, private postService: PostService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data.posts;
    });
  }
}
