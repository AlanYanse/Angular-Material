import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  listaUsuarios: Usuario[] = [
    {usuario: "CBoyi", nombre: 'Boyi', apellido: "Corradi", genero: 'M'},
    {usuario: "IArrastrau", nombre: 'Arrastrau', apellido: "Iglesia", genero: 'M'},
    {usuario: "El", nombre: 'Elberth', apellido: "desconocido", genero: 'M'},
    {usuario: "CMartinez", nombre: 'Chuck', apellido: "Martinez", genero: 'M'},
    {usuario: "Esward", nombre: 'Matias', apellido: "Erxilapé", genero: 'M'},
    {usuario: "SPato", nombre: 'Sebas_Pato', apellido: "desconocido", genero: 'M'}
  
  ];

  constructor() { }

  getUsuarios(): Usuario[]{
    return this.listaUsuarios.slice();
  }

  eliminarUsuario(index: number): void{

    this.listaUsuarios.splice(index, 1);

  }

  agregarUsuarioService(usuario: Usuario){
    this.listaUsuarios.unshift(usuario);
  }
}
