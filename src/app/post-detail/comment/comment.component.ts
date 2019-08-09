import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit, OnChanges {
  @Input() comments;
  @Input() postId: string;
  myComment: FormGroup;
  loading = false;
  submitted = false;

  constructor(private fb: FormBuilder, private postService: PostService) {}

  ngOnInit() {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.comments) {
      this.comments.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }
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
