import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from './components/about/about.component';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/home/home.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAwHBsyPEqLo2Fq95TKCE5_Y1lDs2KvyII",
  authDomain: "posts-app-168ec.firebaseapp.com",
  projectId: "posts-app-168ec",
  storageBucket: "posts-app-168ec.appspot.com",
  messagingSenderId: "832555529450",
  appId: "1:832555529450:web:defab4506569a6e4049393",
  measurementId: "G-NSPEE3B39K"
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    PostsComponent,
    HomeComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    StoreModule.forRoot({
      
    }),
    EffectsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
