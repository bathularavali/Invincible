import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private myForm: FormGroup;
  private filename = 'Select an image';
  constructor(
    private router: Router,
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
    this.myForm = this.fb.group({
      upload: ['', Validators.required],
      caption: ['', Validators.required]
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onFileSelect(event): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.get('upload').setValue(file);
      this.filename = file.name;
    }
  }
  onSubmit(): void {
    if (this.myForm.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append('file', this.myForm.get('upload').value);
    formData.append('caption', this.myForm.get('caption').value);

    this.postService.createPost(formData).subscribe(() => {
      // window.location.reload();
    });
  }
}
