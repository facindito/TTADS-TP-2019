import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
  }

  registro(form?: NgForm){
    this.usuariosService.registro(form.value)
      .subscribe(res=>{
        this.resetForm(form);
      });
  }
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.usuariosService.selectedUsuario = new Usuario();
    }
  }
}
