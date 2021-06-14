import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUsuarios } from '../interfaces/usuarios.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  BASE_URL ="https://localhost:44371/api";

  constructor(private httpClient: HttpClient) { }

  header = new HttpHeaders ({
    'Type-content':'application/json'
  });

  getUsuarios(): Observable<IUsuarios[]>{
    return this.httpClient.get<IUsuarios[]>(`${this.BASE_URL}/usuarios`, {headers:this.header}); 
  }

  getUsuario(id_usuario: number): Observable<IUsuarios>{
    return this.httpClient.get<IUsuarios>(`${this.BASE_URL}/usuarios/${id_usuario}`, {headers:this.header}); 

  }

  createUsuario(usuario: IUsuarios): Observable<IUsuarios>{
    return this.httpClient.post<IUsuarios>(`${this.BASE_URL}/usuarios`, usuario); 
  }

  updateUsuario(id_usuario: number, usuario: IUsuarios): Observable<IUsuarios>{
    return this.httpClient.put<IUsuarios>(`${this.BASE_URL}/usuarios/${id_usuario}`, usuario);
  }

  deleteUsuario(id_usuario: number): Observable<IUsuarios>{
    return this.httpClient.delete<IUsuarios>(`${this.BASE_URL}/usuarios/${id_usuario}`); 
  }

}
