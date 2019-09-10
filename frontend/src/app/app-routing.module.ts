import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

const routes: Routes = [
    {
      path: 'home',
      component: MoviesComponent,
      children: []
      },
      {
      path: '',
      component: MoviesComponent,
      },
      {
        path: 'crear-pelicula',
        component: CreateMovieComponent
      },
      {
        path: 'pelicula/:id',
        component: MovieDetailsComponent
      }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
export class AppRoutingModule { }
