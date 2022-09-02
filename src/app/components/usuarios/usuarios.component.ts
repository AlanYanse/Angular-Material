import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';





@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listaUsuarios: Usuario[] = [];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'genero', "acciones"];
  dataSource!: MatTableDataSource<any>;

  

  constructor(private _usuarioService: UsuarioServiceService, private _snackBar: MatSnackBar) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  cargarUsuarios(): void{

    this.listaUsuarios = this._usuarioService.getUsuarios();
    this.dataSource = new MatTableDataSource(this.listaUsuarios);
  }
  
  deleteUsuario(index: number): void{

    this._usuarioService.eliminarUsuario(index);

    //alert(this.listaUsuarios[index].nombre);

    this._snackBar.open(`el usuario ${this.listaUsuarios[index].usuario} fué eliminado con éxito`, "", {
      duration: 3500,
      horizontalPosition: "center",
      verticalPosition: "top"
    });

    this.cargarUsuarios(); // Para ver los cambios
  }

  ngOnInit(): void {

    this.cargarUsuarios();
  }

}
