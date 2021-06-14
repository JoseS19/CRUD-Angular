import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuarios } from 'src/app/interfaces/usuarios.interface';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  usuario: IUsuarios ={
    id_usuario: 0,
    nombre: "",
    num_tel: "",
    pass: ""
  };
  encabezado = "";
  boton = "";
  editando: boolean = false;

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    const edit = this.router.url.includes('/edit/');

    if(edit){
      this.encabezado = 'Editar información de usuario';
      this.boton = 'Guardar cambios';
      this.getUsuario(params.id_usuario);
      this.editando = true;
    }else{
      this.encabezado = "Nuevo usuario";
      this.boton = "Crear usuario";
    }

  }

  getUsuario(id_usuario: number){
    this.usuarioService.getUsuario(id_usuario)
      .subscribe(
        res=>{
          this.usuario = res;
        },
        err=>{
          console.log(err);
          this.router.navigate(['/usuario']);
        }
      )
  }

  updateUsuario(){
    this.usuario.num_tel = this.usuario.num_tel.toString();
    this.usuarioService.updateUsuario(this.usuario.id_usuario, this.usuario)
    .subscribe(
      res=>{
        alert("Usuario actualizado correctamnete");
        this.router.navigate(['/usuario']);
      },
      err=>{
        console.log(err);
      }
    )
  }

  createUsuario(){
    this.usuario.num_tel = this.usuario.num_tel.toString();
    this.usuarioService.createUsuario(this.usuario).subscribe(
      res=> {          
          alert("Usuario creado correctamente");
          this.router.navigate(['/usuario']);
        },
      err => {
        console.log(err);
      }
    )
  }

}
