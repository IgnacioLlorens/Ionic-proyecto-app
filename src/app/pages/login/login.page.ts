import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario :any;
  pass :any;
  modalCtrl : any;
  showPassword = false;
  passwordToggleIcon = 'eye';
  constructor(private toastController:ToastController,private router:Router,private usuarioService: UsuarioService, private alertController : AlertController) { }

  ngOnInit() {
  }



  login(){
    var aux = this.usuarioService.credencialUsuario(this.usuario,this.pass);
    var aux2 = this.usuarioService.credencialUsuario2(this.usuario,this.pass);
    if(aux != undefined){
      if(aux.tipo_usuario == 'administrador')
      {this.router.navigate(["/home"])}
      else if(aux.tipo_usuario == 'Pasajero')
      {this.router.navigate(["/homepasajero"])}
      else if(aux.tipo_usuario == 'Conductor')
      {this.router.navigate(["/homeconductor"])}
      this.usuario = "";
      this.pass="";
    }
    else if(aux2 != undefined){
      if(aux2.tipo_usuario == 'administrador')
      {this.router.navigate(["/home"])}
      else if(aux2.tipo_usuario == 'Pasajero')
      {this.router.navigate(["/homepasajero"])}
      else if(aux2.tipo_usuario == 'Conductor')
      {this.router.navigate(["/homeconductor"])}
      this.usuario = "";
      this.pass="";
    }
    else{
      this.presentToast();
    }
    
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'usuario o contaseña incorrectos',
      duration: 3000
    });
    toast.present();
  }

  togglePassword():void{
    this.showPassword = !this.showPassword;


    if (this.passwordToggleIcon == 'eye'){
      this.passwordToggleIcon = 'eye-off';
    }else{
      this.passwordToggleIcon = 'eye';
    }
  }

}
