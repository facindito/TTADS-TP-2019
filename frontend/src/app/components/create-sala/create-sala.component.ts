import { Component, OnInit } from '@angular/core';
import { SalasService } from '../../services/salas.service';
import { NgForm } from '@angular/forms';
import { Sala } from '../../models/sala';

@Component({
  selector: 'app-create-sala',
  templateUrl: './create-sala.component.html',
  styleUrls: ['./create-sala.component.css'],
  providers: [SalasService]
})
export class CreateSalaComponent implements OnInit {

  numero: string;
  capacidad: number;

  constructor(private salasService: SalasService) { }

  ngOnInit() {  }

  addSala(form: NgForm) {
    /*if(form.value._id){
      this.moviesService.putMovie(form.value)
        .subscribe(res=>{
          this.resetForm();
        })
    }else{*/
      this.salasService.postSala(form.value)
        .subscribe(res => {
          this.resetForm(form);
        });
     // }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.salasService.selectedSala = new Sala();
    }
  }

}
