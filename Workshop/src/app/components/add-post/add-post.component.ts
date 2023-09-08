import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post, PostToCreate } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';
import { Timestamp } from 'firebase/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})

export class AddPostComponent implements OnInit {

  addPostForm: FormGroup;
  postCreationStatus: boolean;

  constructor(private readonly postsService: PostsService){}

  ngOnInit(): void {
    this.initForm();
    this.postsService.postCreationStatus.subscribe((status)=>{
      this.postCreationStatus = status;
    })
  }

  initForm = (): void => {
    this.addPostForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      content: new FormControl("", [Validators.required]),
      author: new FormControl("", [Validators.required]),
      creationDate: new FormControl("", [Validators.required]),
      likes: new FormControl(0, [Validators.required , Validators.min(0)]),
    })
  }

  onFormSubmit = () => {

    const {title, content, author, creationDate, likes} = this.addPostForm.value;

    let creationDateToTimestamp = new Date(creationDate);

    const postToAdd: PostToCreate= {
      title,
      author,
      content,
      creationDate: Timestamp.fromDate(creationDateToTimestamp),
      likes,
    }
    
    this.postsService.createPost(postToAdd);

    this.addPostForm.reset()
  } 
}
