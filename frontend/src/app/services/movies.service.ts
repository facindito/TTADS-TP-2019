import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  selectedMovies: Movie;
  movies: Movie[];
  movie: Movie;
  readonly URL_API = 'http://localhost:3000/api/movies';

  constructor(private http: HttpClient) {
    this.selectedMovies = new Movie();
   }



  getMovies() {
    return this.http.get(`${this.URL_API}`);
  }
  /*
  getMoviesFiltrado(estado: string, bandera: string) {
    return this.http.get(`${this.URL_API}/${estado}/${bandera}/`);
  }
  */
  getMovieProx(){
    return this.http.get(`${this.URL_API}/proximamente`);
  }

  getOneMovie(id: string) {
    return this.http.get(`${this.URL_API}/${id}`);
  }

  postMovie(movie: Movie) {
    return this.http.post(`${this.URL_API}`, movie);
  }

  putMovie(movie: Movie) {
    return this.http.put(this.URL_API + `/${movie._id}`, movie);
  }

  deleteMovie(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
