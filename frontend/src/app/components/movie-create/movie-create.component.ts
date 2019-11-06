import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  constructor(private moviesService: MoviesService, private router: Router) { }

  photoSelected: string | ArrayBuffer;
  file: File;
  ngOnInit() {
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  addMovie(form?: NgForm) {
    /*if(form.value._id){
      this.moviesService.putMovie(form.value)
        .subscribe(res=>{
          this.resetForm();
        })
    }else{*/
    this.moviesService.postMovie(form.value, this.file)
      .subscribe(res => {
        this.resetForm(form);
      });
    // }
    this.router.navigate(['/home']);
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.moviesService.selectedMovies = new Movie();
    }
  }
}
