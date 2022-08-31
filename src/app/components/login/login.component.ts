import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
      this.form = this.formBuilder.group({
      usuario: ["", Validators.required],
      password: ["", Validators.required]
    });
   }

  ngOnInit(): void {
    
  }

  ingresar(){
    
    // Capturando valores que vienen del form
    const usuario: string = this.form.value.usuario;
    const password: string = this.form.value.password;

    this.validacion(usuario , password)
  }

  validacion(usuario: string, password: string) {

    let fakeUser: string = "cosme";
    let fakePass: string = "fulanito";

    if(fakeUser === usuario && fakePass === password){
      // Al dashboard
    }else{
      // mensaje de error
      this.error();
    }

  }

  error(){

    this._snackBar.open("algunos de los datos ingresados no son válidos", "", {
      duration: 4000,
      horizontalPosition: "center",
      verticalPosition: "top"
    })

  }

}
