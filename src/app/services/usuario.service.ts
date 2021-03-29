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

    signup(buscar_to_usuario, gethash = null){
        if(gethash != null){
            buscar_to_usuario.gethash = gethash;
        }
        let datajson = JSON.stringify(buscar_to_usuario);
        let params = datajson;

        let HttpHeaders = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url+'login', params, {HttpHeaders: Headers}).pipe(map(res => res.json())); 

    }
}