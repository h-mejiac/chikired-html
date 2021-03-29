import { Component, OnInit } from '@angular/core';
import {UsuarioService } from './services/usuario.service';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsuarioService]
})
export class AppComponent implements OnInit {
  title = 'Primer comentario';
  usuario: Usuario;

  constructor(
    private _usuarioServicio:UsuarioService
  ){
    this.usuario = new Usuario('','','','',false,false,0);
  }

  ngOnInit(){
    this._usuarioServicio.signup();
  }

  public onSubmit(){
    console.log(this.usuario);
  }
}
