import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { CreateSalaComponent } from './components/create-sala/create-sala.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CreateMovieComponent,
    MovieDetailsComponent,
    CreateSalaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
