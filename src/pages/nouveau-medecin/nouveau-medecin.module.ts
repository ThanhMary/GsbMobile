import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NouveauMedecinPage } from './nouveau-medecin';

@NgModule({
  declarations: [
   NouveauMedecinPage,
  ],
  imports: [
    IonicPageModule.forChild(NouveauMedecinPage),
  ],
})
export class NouveauMedecinPageModule {}
