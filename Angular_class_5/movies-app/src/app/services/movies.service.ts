import { EventEmitter, Injectable } from '@angular/core';
import { Movie } from '../interface/movie';
import { MOVIES_DATA } from '../mock-data/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() {}

 private _movies: Movie[] = MOVIES_DATA;

 _selectedMovie = new EventEmitter<Movie>()

 getMovies(){
  return this._movies
 }

 getMovieById(id: number): Movie | undefined{
  const foundMovie = this._movies.find((movie) => movie.id === id);
  if(!foundMovie){
    console.log("Not movie found");
  }
  return foundMovie;
 }

 setSelectedMovie(movie: Movie) : void {
  this._selectedMovie.emit(movie)
 }


}
