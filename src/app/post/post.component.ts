import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  myForm: FormGroup;
  filename = 'Select a image';
  constructor(private fb: FormBuilder, private postService: PostService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      upload: '',
      caption: ''
    });
    this.myForm.valueChanges.subscribe(console.log);
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.get('upload').setValue(file);
      this.filename = file.name;
    }
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.myForm.get('upload').value);

    this.postService.createPost(formData);
  }
}
