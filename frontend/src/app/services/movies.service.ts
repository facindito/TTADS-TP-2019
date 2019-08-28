import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  selectedMovies : Movie; 
  movies: Movie[];
  readonly URL_API = 'http://localhost:3000/api/movies' 
  constructor(private http: HttpClient) {
    this.selectedMovies = new Movie();
   }

  getMovies(){
    return  this.http.get('http://localhost:3000/api/movies');
  }
  postMovie(Movie : Movie){
    return this.http.post(this.URL_API, Movie);
  }
  putMovie(movie : Movie){
    return this.http.put(this.URL_API + `/${movie._id}`, movie);
  }
  deleteMovie(_id : string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
