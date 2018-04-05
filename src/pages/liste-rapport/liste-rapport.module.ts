import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeRapportPage } from './liste-rapport';

@NgModule({
  declarations: [
    ListeRapportPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeRapportPage),
  ],
})
export class ListeRapportPageModule {}
