import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import { IUsuarios } from 'src/app/interfaces/usuarios.interface';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  constructor(private usuarioService: UsuarioServiceService, private router: Router, private tittle: Title) {
      this.tittle.setTitle("Usuarios");
  }

  usuarios: IUsuarios[] = [];

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuarioService.getUsuarios()
    .subscribe(
      res => {
        this.usuarios = res;
      },
      err => console.log(err)
    )
  }

  deleteUsuario(id_usuario: number){
    this.usuarioService.deleteUsuario(id_usuario)
    .subscribe(
      res => {
        alert("Usuario eliminado correctamente");
      },
      err => console.log(err)
    )
  }


}
