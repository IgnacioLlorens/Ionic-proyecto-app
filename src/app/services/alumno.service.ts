import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  //Variables necesarias para el crud:
  alumnos: any[] = [
    {
      rut: '11.111.111-1',
      correo: "admin@duocuc.cl",
      nombre: "diosito",
      fechaNacimiento: "1111-01-01",
      genero: "N/A",
      pass: "diosito",
      idLicencia: "",
      tipoUsuario: 'Administrador'
    }
  ];

  constructor() { }

  //Metodos del crud

  agregarAlumno(alumno) : boolean{
    var registrado : boolean = false;
    if ( this.listarAlumno(alumno.rut) == undefined ) {
      this.alumnos.push(alumno);
      registrado = true;
      return registrado;
    }
    return registrado;
  }


  modifificarAlumno(alumno){
    var indice = this.alumnos.findIndex(x => x.rut == alumno.rut)
    this.alumnos[indice] = alumno;
  }


  listarAlumno(rut){
    return this.alumnos.find(x => x.rut == rut);
  }


  eliminarAlumno(rut){
    this.alumnos.forEach((alum, index) => {
      if (alum.rut == rut) {
        this.alumnos.splice(index, 1)
      }
    });
  }


  listarTodo(){
    return this.alumnos;
  }


  //CUSTOMER METHODS
  validarIngreso(usuario, pass){
    return this.alumnos.find(x => x.correo == usuario && x.pass == pass);
  }


}
