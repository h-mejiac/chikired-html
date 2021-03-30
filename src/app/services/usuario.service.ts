import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators'; 
import { Observable } from 'rxjs/Observable';
import {GLOBAL} from './global';

@Injectable()
export class UsuarioService {
    public url: string;
    constructor(private _http: HttpClient){
        this.url = GLOBAL.url;
    }

    signup(){
        return 'Hola desde el servicio';
    }
}