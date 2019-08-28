import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie} from '../../models/movie';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MoviesService]
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService :MoviesService) { }
  movies: Movie[];
  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
    this.moviesService.getMovies()
      .subscribe((res:any) =>{
        this.moviesService.movies = res.movies;
        console.log(this.moviesService.movies);      
      });
  }

}