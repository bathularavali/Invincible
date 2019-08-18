import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private searchTerm: string;
  private postResults: any[];
  private userResult: any;
  private results: any;

  constructor(
    @Inject('BACKEND_API_URL') private apiUrl: string,
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.searchTerm = params.get('q');
      if (this.searchTerm) {
        this.getSearchResults(this.searchTerm);
      }
    });
  }

  getSearchResults(searchTerm: string): void {
    this.postService.search(searchTerm).subscribe(data => {
      this.userResult = data.user;
      this.postResults = data.posts;
      this.results = data;
    });
  }
}
