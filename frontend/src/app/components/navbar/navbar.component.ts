import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  }

  getSearch(titulo) {
    /* this.moviesService.getSearch(titulo)
     .subscribe((res: any) => {
       this.moviesService.search = res.movies;
       });*/
    this.moviesService.titulo = titulo;

  }

}
