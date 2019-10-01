import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { NgForm } from '@angular/forms';

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
   }

  ngOnInit() {  }

  addMovie(form?: NgForm) {
    /*if(form.value._id){
      this.moviesService.putMovie(form.value)
        .subscribe(res=>{
          this.resetForm();
        })
    }else{*/
      this.moviesService.postMovie(form.value)
        .subscribe(res => {
          this.resetForm(form);
        });
     // }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.moviesService.selectedMovies = new Movie();
    }
  }

}
