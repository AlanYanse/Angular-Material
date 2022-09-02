import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  genero: any[] = [
    {value: 'M', viewValue: 'Masculino'},
    {value: 'F', viewValue: 'Femenino'},
    {value: 'no-2', viewValue: 'Prefiero no decir'},
  ];

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioServiceService, 
              private router: Router, private snackBar: MatSnackBar ) {
    
    this.formGroup = this.formBuilder.group({
      usuario: ["", Validators.required],
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      genero: ["", Validators.required],
    });
   }

  agregarUsuario(): void{
    
    // Captura de los campos del formulario
    const usuario: Usuario = {
      usuario: this.formGroup.value.usuario,
      nombre: this.formGroup.value.nombre,
      apellido: this.formGroup.value.apellido,
      genero: this.formGroup.value.genero,
    }

    
    //Agrega el objeto al array por medio de el servicio injectado
    this.usuarioService.agregarUsuarioService(usuario);
    this.snackBar.open("Usuario agregado con éxito", "", {
      duration: 2500,
      horizontalPosition: "center",
      verticalPosition: "top"
    });

    this.router.navigate(["/dashboard/usuarios"]);
    
  }

  ngOnInit(): void {
  }

}
