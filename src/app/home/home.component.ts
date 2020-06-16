import { UserService } from './service/user.service';
import { UserModel } from './model/user-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  titulo = 'HOME';
  panelOpenState = false;
  usuarios: UserModel[] = [];
  usuario: UserModel = new UserModel();
  usuarioFiltrados: UserModel[] = [];
  seletorTela = 'lista';
  filtro = '';
  constructor(private userService: UserService) {}

  ngOnInit(): void {

    this.usuarioFiltrados = this.usuarios;
    this.userService.obterUsuarios().subscribe(val => {
      if (val.length > 0){
      val.forEach(a => {
        this.usuario = a;
        this.usuarios.push(this.usuario);
     });
    }
   });
  }
  expandirDetalhes(id: string){
    this.titulo = 'DETALHES';
    this.seletorTela = 'detalhes';
    this.userService.idUsuario.next(id);
  }
  atualizarLista() {
    if (this.filtro.length <= 0){
      this.usuarioFiltrados = this.usuarios;
    }
    else{
      this.usuarioFiltrados = [];
      for (let i = 0; i <= this.usuarios.length; i++){
        const name = this.usuarios[i].name.toUpperCase();
        if (name.startsWith(this.filtro.toUpperCase())) {
          this.usuarioFiltrados.push(this.usuarios[i]);
        }
      }
    }
  }
}
