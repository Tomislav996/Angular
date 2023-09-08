import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private readonly postsService: PostsService, private readonly router:Router){}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((data)=>{
      this.posts = data;
    })
  }

  navigateToCreatePost = () => {
    this.router.navigate(['/add-post'])
  }


}
