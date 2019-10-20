import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prox-estrenos',
  templateUrl: './prox-estrenos.component.html',
  styleUrls: ['./prox-estrenos.component.css']
})
export class ProxEstrenosComponent implements OnInit {

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit() {
    this.getMovieProx()
  }
  getMovieProx() {
    this.moviesService.getMovieProx()
      .subscribe((res: any) => {
        this.moviesService.moviesProx = res.movies;
        });
  }
  movieDetails(id) {
    this.router.navigate(['/pelicula', id]);
  }

}
