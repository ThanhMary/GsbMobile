import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisiteurPage } from './visiteur';

@NgModule({
  declarations: [
    VisiteurPage,
  ],
  imports: [
    IonicPageModule.forChild(VisiteurPage),
  ],
})
export class VisiteurPageModule {}
