import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { LoginComponent } from './components/login/login.component';
import { ProxEstrenosComponent } from './components/prox-estrenos/prox-estrenos.component';
import { MovieCreateComponent } from './components/movie-create/movie-create.component';
import { SalaCreateComponent } from './components/sala-create/sala-create.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';

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
    component: MovieCreateComponent
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
    component: SalaCreateComponent
  },
  {
    path: 'proximamente',
    component: ProxEstrenosComponent
  },
  {
    path: 'registrarse',
    component: RegisterComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
