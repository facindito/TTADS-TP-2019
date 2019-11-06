import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  selectedMovies: Movie;
  movies: Movie[];
  movie: Movie;
  moviesProx: Movie[];
  moviesCart: Movie[];
  search: Movie[];
  titulo: string;
  file: File;
  readonly URL_API = 'http://localhost:3000/api/movies';

  constructor(private http: HttpClient) {
    this.selectedMovies = new Movie();
  }

  getMovies() {
    return this.http.get(`${this.URL_API}`);
  }

  getMovieProx() {
    return this.http.get(`${this.URL_API}/proximamente`);
  }

  getMovieCart() {
    return this.http.get(`${this.URL_API}/cartelera`);
  }
  getSearch(titulo: string) {
    return this.http.get(`${this.URL_API}/search/${titulo}`);
  }

  getOneMovie(id: string) {
    return this.http.get(`${this.URL_API}/${id}`);
  }

  postMovie(movie: Movie, file: File) {
    const form = new FormData();
    form.append('titulo', movie.titulo);
    form.append('estado', movie.estado);
    form.append('genero', movie.genero);
    form.append('actores', movie.actores);
    // form.append('duracion', movie.duracion); arreglar
    form.append('director', movie.director);
    form.append('argumento', movie.argumento);
    form.append('poster', file);
    return this.http.post(`${this.URL_API}`, form);
  }

  putMovie(movie: Movie) {
    return this.http.put(this.URL_API + `/${movie._id}`, movie);
  }

  deleteMovie(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
