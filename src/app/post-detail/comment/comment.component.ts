import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() private comments;
  @Input() private postId: string;
  private myComment: FormGroup;
  private loading = false;
  private submitted = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postService.refreshNeeded$.subscribe(() => {
      this.initForm();
    });
    this.initForm();
  }

  initForm(): void {
    this.myComment = this.fb.group({
      comment: ['', Validators.required]
    });
  }

  get f() {
    return this.myComment.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.myComment.invalid) {
      return;
    }
    this.loading = true;
    const formData = new FormData();
    formData.append('comment', this.myComment.value);
    this.postService
      .createComment(this.myComment.value, this.postId)
      .subscribe(() => {});
  }
}
