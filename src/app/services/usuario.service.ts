import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios: any[] = [ {
    rut:"11111111-1",
    correo:"admin@duocuc.cl",
    nombre: "diosito",
    fechaNacimiento :"1000-02-02",
    genero:"hombre",
    idlicencia:"",
    pass:"sasasa",
    tipo_usuario:"administrador"
  },{
  rut:"65879231-8",
  correo:"lavi@duoc.cl",
  nombre: "lavieja",
  fechaNacimiento :"1000-02-02",
  genero:"hombre",
  idlicencia:"",
  pass:"sesese",
  tipo_usuario:"Pasajero"},
  {
  rut:"12563549-0",
  correo:"relo@profesor.duoc.cl",
  nombre: "reloko",
  fechaNacimiento :"1000-02-02",
  genero:"hombre",
  idlicencia:"111111111",
  pass:"sisisi",
  tipo_usuario:"Conductor"
  }];

  constructor() { }

  agregarUsuario(usuario):boolean{
    var registrado :boolean = false
    if(this.obtenerUsuario(usuario.rut)==undefined){
      this.usuarios.push(usuario);
      registrado=true
      return registrado
    }
    else{
      return registrado
    }
  };

  elimnarUsuario(rut){
    this.usuarios.forEach((usu, index) => {
      if(usu.rut==rut){
        this.usuarios.splice(index,1);
      }
    });

  };

  modificarUsuario(usuario){
    var index = this.usuarios.findIndex(usu => usu.rut == usuario.rut);
    this.usuarios[index] = usuario;

  };
  obtenerUsuario(rut){
    return this.usuarios.find(usuario => usuario.rut == rut);
  };
  
  obtenerUsuariocorreo(correo){
    return this.usuarios.find(usuario => usuario.correo == correo);
  };

  obtenerUsuarios(){
    return this.usuarios;
  };

  credencialUsuario(rut,pass){
    return this.usuarios.find(usuario => usuario.rut == rut && usuario.pass==pass );
  };

  credencialUsuario2(correo,pass){
    return this.usuarios.find(usuario => usuario.correo == correo && usuario.pass==pass );
  };
}
