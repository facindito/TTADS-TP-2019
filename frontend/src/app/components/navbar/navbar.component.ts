import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  myForm: FormGroup;
  tituloSearch: string;

  constructor(private moviesService: MoviesService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      tituloSearch: ''
    });

    this.myForm.valueChanges.subscribe(console.log);

    this.onChanges();

  }

  onChanges(): void {
    this.myForm.valueChanges.subscribe(search => {
    console.log('titulo de observable: ' + search.tituloSearch);
    this.tituloSearch = search.tituloSearch;
    console.log('asignacion de tituloSearch: ' + this.tituloSearch);
    this.moviesService.announceMission(this.tituloSearch);
    this.router.navigate(['/search']);
    });
  }


  getSearch(titulo) {
     this.moviesService.getSearch(titulo)
     .subscribe((res: any) => {
       this.moviesService.search = res.movies;
       });
    //this.moviesService.titulo = titulo;

  }

}
