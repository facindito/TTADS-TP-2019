import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sala } from '../models/sala';

@Injectable({
  providedIn: 'root'
})

export class SalasService {

  selectedSala: Sala;
  salas: Sala[];
  sala: Sala;
  readonly URL_API = 'http://localhost:3000/api/salas';


  constructor(private http: HttpClient) {
    this.selectedSala = new Sala();
  }

  getSala() {
    return this.http.get(this.URL_API);
  }

  postSala(sala: Sala) {
    return this.http.post(this.URL_API, sala);
  }

  putSala(sala: Sala) {
    return this.http.put(this.URL_API + `/${sala._id}`, sala);
  }

  deleteSala(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
