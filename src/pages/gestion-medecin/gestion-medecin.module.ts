import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionMedecinPage } from './gestion-medecin';

@NgModule({
  declarations: [
    GestionMedecinPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionMedecinPage),
  ],
})
export class GestionMedecinPageModule {}
