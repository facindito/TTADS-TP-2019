import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit() {
    this.getSearch();
  }
  
  getSearch(){
    var titulo = this.moviesService.titulo;
    this.moviesService.getSearch(titulo)
     .subscribe((res: any) => {
       this.moviesService.search = res.movies;
       });
      }

  movieDetails(id) {
    this.router.navigate(['/pelicula', id]);
  }
}
