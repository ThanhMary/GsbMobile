import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionRapportPage } from './gestion-rapport';

@NgModule({
  declarations: [
    GestionRapportPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionRapportPage),
  ],
})
export class GestionRapportPageModule {}
