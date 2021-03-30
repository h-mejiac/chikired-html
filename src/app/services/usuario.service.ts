import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import {GLOBAL} from './global';
import { Usuario } from '../models/usuario';

@Injectable()
export class UsuarioService {
    public url: string;
    constructor(
        private http: HttpClient
    ){
        this.url = GLOBAL.url;
    }

    getHeroes(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.heroesUrl)
      }

    signup(buscar_to_usuario, gethash = null){
        if(gethash != null){
            buscar_to_usuario.gethash = gethash;
        }
        let datajson = JSON.stringify(buscar_to_usuario);
        let params = datajson;

        let HttpHeaders = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url+'login', params, {headers: this.HttpHeaders}).pipe(map((res: Response) => res.json())); 

    }
}