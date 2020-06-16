import { UserService } from './../service/user.service';
import { UserModel } from './../model/user-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-user',
  templateUrl: './detalhes-user.component.html',
  styleUrls: ['./detalhes-user.component.scss']
})
export class DetalhesUserComponent implements OnInit {
  usuario: UserModel = new UserModel();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.obterDetalhesUsuario().subscribe(val => {
      if (val != null) {
        this.usuario = (val as UserModel);
      }
    });
  }

}
