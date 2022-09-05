import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController,AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { validadores } from 'src/app/services/validadores';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  alumno = new FormGroup({
    rut : new FormControl('',[Validators.required,Validators.pattern('[0-9]{7,8}-[0-9Kk]{1}')]),
    correo : new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{1,4}.[A-Za-z]{1,20}@duocuc.cl|[A-Za-z]{1,4}.[A-Za-z]{1,20}@duoc.cl|[A-Za-z]{1,4}.[A-Za-z]{1,20}@profesor.duoc.cl')]),
    nombre : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    fechaNacimiento : new FormControl('',[Validators.required]),
    genero : new FormControl('',[Validators.required]),
    idlicencia : new FormControl('',[Validators.pattern('[0-9]{9}')]),
    pass : new FormControl('',[Validators.required]),
    tipo_usuario :new FormControl("pasejero")
  });
  
  usuarios: any[] =[];

  pass2:string;

  constructor(private usuarioService: UsuarioService,private router:Router,private alertController : AlertController) { }

  ngOnInit() {
    this.usuarios =this.usuarioService.obtenerUsuarios();
  }

 registrar(){
  if(this.alumno.controls.pass.value != this.pass2){
    alert("contarseña incorrecta");
    return;
  }
  var registrado:boolean = this.usuarioService.agregarUsuario(this.alumno.value);
  if(registrado == true){
  alert("alumno registrado");
  this.alumno.reset();
  this.pass2 = '';
  }
  else{
    alert("usuario existente");
  }
 }

  eliminar(rut){
    this.usuarioService.elimnarUsuario(rut);
  }
  buscar(rut){
    var encontrado = this.usuarioService.obtenerUsuario(rut);
    this.alumno.setValue(encontrado);
    this.pass2=encontrado.pass;
  }
  modificar(){
    this.usuarioService.modificarUsuario(this.alumno.value);
    this.alumno.reset();
    this.pass2 =""
  }
  limpiar(){
    this.alumno.reset();
    this.pass2 =""
  }

  alerta(){
    alert("Usuario Eliminado!")
  }

  async presentAlert(rut) {
    const alert = await this.alertController.create({
      header: 'Eliminara permanentemente a este usuario!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (ELIMINAR) => {
            this.eliminar(rut);
            this.alerta();
            
          },
        },
      ],
    });
    await alert.present();

}




}
