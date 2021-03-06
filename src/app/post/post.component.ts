import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  myForm: FormGroup;
  filename = '';
  submitted = false;

  constructor(private fb: FormBuilder, private postService: PostService) {}

  ngOnInit() {
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
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append('file', this.myForm.get('upload').value);
    formData.append('caption', this.myForm.get('caption').value);
    formData.append(
      'hashtag',
      this.myForm.get('caption').value.match(/#[a-zA-Z0-9_]+/gi)
    );
    this.myForm.reset();

    this.postService.createPost(formData).subscribe();

    this.filename = '';
    this.submitted = false; // reset submitted for form validation
  }
}
