import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie} from '../../models/movie';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
  providers: [MoviesService]
})
export class CreateMovieComponent implements OnInit {

  titulo: string;
  fechaEstreno: Date;
  movie: Movie;

  constructor(private moviesService: MoviesService) {
    this.movie = new Movie();
   }

  ngOnInit() {  }

  createMovie(titulo, fechaEstreno) {
    this.movie.titulo = titulo;
    this.movie.fechaEstreno = fechaEstreno;
    console.log(this.movie.fechaEstreno);
    this.moviesService.postMovie(this.movie);
  }

}
