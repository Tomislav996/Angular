import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: ``, component: AppComponent},
  {path: `about`, component: AboutComponent},
  {path: `movies`, component: MoviesListComponent},
  {path: `movies/:id`, component: MovieDetailsComponent},
  {path: `not-found`, component: NotFoundComponent},
  {path: `**`, component: NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
