import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { CreateSalaComponent } from './components/create-sala/create-sala.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    {
      path: 'home',
      component: MoviesComponent,
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
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'crear-sala',
        component: CreateSalaComponent
      }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
export class AppRoutingModule { }
