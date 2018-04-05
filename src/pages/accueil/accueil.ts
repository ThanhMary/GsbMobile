import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GestionRapportPage } from '../gestion-rapport/gestion-rapport';
import { GestionMedecinPage } from '../gestion-medecin/gestion-medecin';


@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',

})
export class AccueilPage {

  
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }

  private goToGestionRapportPage(){
    this.navCtrl.push(GestionRapportPage);
  }
  private goToGestionMedecinPage(){
    this.navCtrl.push(GestionMedecinPage);
  }

}
