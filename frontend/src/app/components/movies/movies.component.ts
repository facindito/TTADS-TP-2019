import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesService]
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService, private router: Router) { }
  movies: Movie[];
  moviesC: Movie[];
  moviesP: Movie[];

  ngOnInit() {
    this.getMovies();
    //this.getMoviesFiltrado();
  }

  getMovies() {
    this.moviesService.getMovies()
      .subscribe((res: any) => {
        this.moviesService.movies = res.movies;
        });
  }
/** 
  getMoviesFiltrado() {
    this.moviesService.getMoviesFiltrado('C', 'b')
    .subscribe((res: any) => {
      this.moviesC = res.movies;
    });
    this.moviesService.getMoviesFiltrado('P', 'b')
    .subscribe((res: any) => {
      this.moviesP = res.movies;
    });
  }
  **/

  movieDetails(id) {
    this.router.navigate(['/pelicula', id]);
  }

}
