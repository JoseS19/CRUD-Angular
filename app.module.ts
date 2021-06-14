import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormUsuarioComponent } from './components/form-usuario/form-usuario.component';
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    FormUsuarioComponent,
    ListadoUsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "usuario/edit/:id_usuario", component: FormUsuarioComponent},  
      { path: "usuario/nuevo", component: FormUsuarioComponent},  
      { path: "usuario", component: ListadoUsuariosComponent},
      { path: "**", redirectTo: "/usuario"}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
