import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'home-conductor',
    loadChildren: () => import('./pages/home-conductor/home-conductor.module').then( m => m.HomeConductorPageModule)
  },
  {
    path: 'registrocon',
    loadChildren: () => import('./pages/registrocon/registrocon.module').then( m => m.RegistroconPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'homepasajero',
    loadChildren: () => import('./pages/homepasajero/homepasajero.module').then( m => m.HomepasajeroPageModule)
  },
  {
    path: 'homeconductor',
    loadChildren: () => import('./pages/homeconductor/homeconductor.module').then( m => m.HomeconductorPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
