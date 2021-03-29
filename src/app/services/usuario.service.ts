import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators'; 
import {GLOBAL} from './global';

@Injectable()
export class UsuarioService {
    public url: string;
    constructor(private _http: HttpClient){
        this.url = GLOBAL.url;
    }

    signup(empleado_buscar: { gethash: null; }, gethash = null){
        if (gethash != null) {
            empleado_buscar.gethash = gethash;
        }
        let params = JSON.stringify(empleado_buscar); 
        let theheaders = new HttpHeaders();

        theheaders = theheaders.set('Content-Type', 'application/json');
        
        return this._http.post(this.url + 'login', params, { headers: theheaders}).map((res: { json: () => any; }) => res.json());
    }
}