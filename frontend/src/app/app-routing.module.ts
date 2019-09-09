import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';

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
      }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
export class AppRoutingModule { }
