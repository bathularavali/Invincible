import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchTerm: string;
  public results: any;

  constructor(
    @Inject('BACKEND_API_URL') private apiUrl: string,
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.searchTerm = params.get('q');
      if (this.searchTerm) {
        if (this.searchTerm.startsWith('#')) {
          this.searchTerm = this.searchTerm.slice(1);
        }
        this.getSearchResults(this.searchTerm);
      }
    });
  }

  getSearchResults(searchTerm: string): void {
    this.postService.search(searchTerm).subscribe(data => {
      this.results = data;
    });
  }
}
