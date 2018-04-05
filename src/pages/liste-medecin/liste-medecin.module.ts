import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeMedecinPage } from './liste-medecin';

@NgModule({
  declarations: [
    ListeMedecinPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeMedecinPage),
  ],
})
export class ListeMedecinPageModule {}
