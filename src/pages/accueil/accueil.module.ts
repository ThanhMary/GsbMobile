import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccueilPage } from './accueil';
import { GestionMedecinPage } from '../gestion-medecin/gestion-medecin';
import { GestionRapportPage } from '../gestion-rapport/gestion-rapport';


@NgModule({
  declarations: [
    AccueilPage,
    GestionMedecinPage,
    GestionRapportPage
  ],
  imports: [
    IonicPageModule.forChild(AccueilPage),
  ],
})
export class AccueilPageModule {}
