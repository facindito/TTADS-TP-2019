import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id: string;
  movie: Movie;

  constructor(private activeRoute: ActivatedRoute, private router: Router, private moviesService: MoviesService) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;
      this.moviesService.getOneMovie(this.id)
        .subscribe((res: any) => {
          this.movie = res.movie;
          console.log(this.movie);
        });
    });
  }

  deleteMovie() {
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;
      this.moviesService.deleteMovie(this.id)
        .subscribe((res: any) => {
          console.log(res);
        });
    });
  }

}
