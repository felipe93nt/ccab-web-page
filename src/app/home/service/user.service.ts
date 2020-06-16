import { UserModel } from './../model/user-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  idUsuario: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(private http: HttpClient)  { }

  public obterUsuarios() {
    const url = encodeURI('https://jsonplaceholder.typicode.com/users');
    return this.http.get<UserModel[]>(url);
  }

  public obterDetalhesUsuario(){
    const url = encodeURI('https://jsonplaceholder.typicode.com/users/' + this.idUsuario.value);
    return this.http.get(url);
  }
}
