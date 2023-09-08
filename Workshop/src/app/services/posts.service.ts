import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  Timestamp,
  doc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subject, from } from 'rxjs';
import { Post, PostToCreate } from '../interfaces/post.interface';
import { collectionGroup, collection, addDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

   postCreationStatus = new BehaviorSubject<boolean>(false);

  constructor(private readonly firestore: Firestore) {}

  getPosts = () => {
    const postsCollection = collection(this.firestore, 'posts');
    const postsCollectionData = collectionData(postsCollection,{
      idField: 'id',
    }) as Observable<Post[]>;

    return postsCollectionData;
  }

  createPost = (post: PostToCreate) => {
    const postsCollection = collection(this.firestore, 'posts');

    from(addDoc(postsCollection, post)).subscribe({
      next: (document) => {
        this.postCreationStatus.next(true);
      },
      error: (error) => {
        this.postCreationStatus.next(false);
      }
    });
  }
}