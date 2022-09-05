import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-registrar-conductor',
  templateUrl: './registrar-conductor.page.html',
  styleUrls: ['./registrar-conductor.page.scss'],
})
export class RegistrarConductorPage implements OnInit {
  conductor = new FormGroup({
    rut : new FormControl('',[Validators.required,Validators.pattern('[0-9]{1,2}.[0-9]{3}.[0-9]{3}-[0-9Kk]{1}')]),
    correo : new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{1,4}.[A-Za-z]{1,20}@duocuc.cl'),Validators.email]),
    nombre : new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]),
    fechaNacimiento : new FormControl('',[Validators.required]),
    genero : new FormControl('',[Validators.required]),
    idLicencia : new FormControl('',[Validators.required,Validators.minLength(7),Validators.maxLength(9)]),
    pass : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(18)]),
    tipoUsuario: new FormControl('Conductor')
  });
  
  

  //creamos la variable para obtener la vista de usuarios del servicio de alumno:

  //alumnos: any[] = [];
  validar_pw:string;

  constructor(private alumnoService: AlumnoService, private router : Router) { }

  ngOnInit() {
    
  }

 
  //Metodo del formulario
 registrar(){
   if (this.conductor.controls.pass.value != this.validar_pw) {
     alert("Contraseñas no coinciden")
     return;
   }
  this.alumnoService.agregarAlumno(this.conductor.value)
  alert("Conductor registrado");
  //this.alumno.reset();
  //this.validar_pw = "";
   this.router.navigate(['/login']);
 }
}
