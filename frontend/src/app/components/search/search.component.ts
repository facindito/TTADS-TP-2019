import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private moviesService: MoviesService, private router: Router, private fb: FormBuilder) {
/*    console.log('Constructor');
    this.subscription = moviesService.missionAnnounced$.subscribe(
      tituloSearch => { this.tituloSearch = tituloSearch; } );
    console.log(this.tituloSearch);*/
   }

  ngOnInit() {
    this.myForm = this.fb.group({
    tituloSearch: ''
    });

    this.myForm.valueChanges.subscribe(console.log);

    this.onChanges();

    /*console.log('Constructor');
    this.subscription = this.moviesService.missionAnnounced$.subscribe(
      tituloSearch => { this.tituloSearch = tituloSearch; } );
    console.log(this.tituloSearch);*/

    /*this.getSearch(this.tituloSearch);
    console.log('componente search: ' + this.tituloSearch);*/
  }

  onChanges(): void {
    this.myForm.valueChanges.subscribe(search => {
    console.log('titulo de observable: ' + search.tituloSearch);
    this.tituloSearch = search.tituloSearch;
    console.log('asignacion de tituloSearch: ' + this.tituloSearch);
    this.getSearch(this.tituloSearch);
    });
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
