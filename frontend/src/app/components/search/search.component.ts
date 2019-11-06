import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  myForm: FormGroup;
  @Input()
  subscription: Subscription;
  tituloSearch: string;

  constructor(private moviesService: MoviesService, private router: Router) {
    console.log('Constructor');
    this.subscription = moviesService.missionAnnounced$.subscribe(
      tituloSearch => { this.tituloSearch = tituloSearch; } );
    console.log(this.tituloSearch);
   }

  ngOnInit() {
    this.getSearch(this.tituloSearch);
    console.log('componente search: ' + this.tituloSearch);
  }

  getSearch(tituloSearch) {
    this.moviesService.getSearch(tituloSearch)
    .subscribe((res: any) => {
      this.moviesService.search = res.movies;
      });
    }


  /*getSearch() {
    const titulo = this.moviesService.titulo;
    this.moviesService.getSearch(titulo)
      .subscribe((res: any) => {
        this.moviesService.search = res.movies;
      });
  }*/



  movieDetails(id) {
    this.router.navigate(['/pelicula', id]);
  }
}
