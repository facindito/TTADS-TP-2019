import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  selectedUsuario: Usuario;
  usuario: Usuario;
  readonly URL_API = 'http://localhost:3000/api/usuarios';


  constructor(private http: HttpClient) {
    this.selectedUsuario = new Usuario();
  }

  login(usuario: Usuario) {
    return this.http.post(this.URL_API + `/signin`, usuario);
  }

  registro(usuario: Usuario){
    return this.http.post(this.URL_API + `/signup`, usuario);
  }

  getUsuario() {
    return this.http.get(this.URL_API);
  }

  postUsuario(usuario: Usuario) {
    return this.http.post(this.URL_API, usuario);
  }

  putUsuario(usuario: Usuario) {
    return this.http.put(this.URL_API + `/${usuario._id}`, usuario);
  }

  deleteUsuario(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
