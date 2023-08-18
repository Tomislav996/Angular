import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/movie';
import { MoviesService } from 'src/app/services/movies.service';
import{Router} from "@angular/router"

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor(private readonly movieService: MoviesService, private readonly router: Router){

  }
  movies: Movie[] = [];

  selectedMovie: Movie;

  ngOnInit(): void {
    this.movies = this.movieService.getMovies()
    this.movieService.setSelectedMovie.subscribe(res => {
      this.selectedMovie = res;
    })
  }

  onSelectMovie(movie: Movie) {
    this.movieService.setSelectedMovie(movie);
    this.router.navigate(['/movies', movie.id])
  }
}
