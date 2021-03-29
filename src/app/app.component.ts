import { Component } from '@angular/core';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Primer comentario';
  usuario: Usuario;

  constructor(){
    this.usuario = new Usuario('','','',false,false,0);
  }

  public onSubmit(){
    console.log(this.usuario);
  }
}
