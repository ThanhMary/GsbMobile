import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil'
import { NouveauMedecinPage } from '../nouveau-medecin/nouveau-medecin';
import { ListeMedecinPage } from '../liste-medecin/liste-medecin';

import { NouveauRapportPage } from '../nouveau-rapport/nouveau-rapport';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { ModifierPraticienPage } from '../modifier-praticien/modifier-praticien';
/**
 * Generated class for the GestionMedecinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestion-medecin',
  templateUrl: 'gestion-medecin.html',
})
export class GestionMedecinPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionMedecinPage');
  }

private goToNouveauMedecinPage(){
  this.navCtrl.push(NouveauMedecinPage);
}
private goToListeMedecinPage(){
  this.navCtrl.push(ListeMedecinPage);
}

private goToAccueil(){
  this.navCtrl.push(AccueilPage);
}




}

