import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarConductorPageRoutingModule } from './registrar-conductor-routing.module';

import { RegistrarConductorPage } from './registrar-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarConductorPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrarConductorPage]
})
export class RegistrarConductorPageModule {}
