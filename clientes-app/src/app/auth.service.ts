import { Observable } from 'rxjs';
import { Usuario } from './login/usuario';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiURLBase + "/api/usuarios";
  tokenURL: string = environment.apiURLBase + environment.obterTokenURL;
  clientID: string = environment.clientId;
  clientSecret: string = environment.clientSecret; 
  jwtHelper: JwtHelperService = new JwtHelperService;

  constructor(
    private http : HttpClient
  ) { }

  obterToken(){
    const tokenString = localStorage.getItem('access_token');
    if(tokenString){
      const token = JSON.parse(tokenString).access_token;
      return token
    }
    return null;
  }
 
  isAuthenticated() : boolean {
    const token = this.obterToken();
    if(token){
      const expired = this.jwtHelper.isTokenExpired(token);
      return !expired;
    }
    return false;
  }

  getUsuarioAutenticado(){
    const token = this.obterToken();
    if(token){
      const usuario = this.jwtHelper.decodeToken(token).user_name;
      return usuario;
    }
    return null;
  }

  encessarSessao(){
    localStorage.removeItem('access_token');
  }

  salvar(usuario : Usuario) : Observable<any>{
    return this.http.post<any>(this.apiURL, usuario)
  }

  tentarLogar(username: string, password: string) : Observable<any>{
    const params = new HttpParams()
                        .set('username', username)
                        .set('password', password)
                        .set('grant_type', 'password');
    const headers = {
      'Authorization' : 'basic ' + btoa(`${this.clientID}:${this.clientSecret}`),
      'Content-Type' : 'application/x-www-form-urlencoded'
    }

    return this.http.post(this.tokenURL, params.toString(), { headers });
  }
}
