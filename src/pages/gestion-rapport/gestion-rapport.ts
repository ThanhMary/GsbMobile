import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil'
import { NouveauRapportPage } from '../nouveau-rapport/nouveau-rapport';
import { ListeRapportPage } from '../liste-rapport/liste-rapport';


@IonicPage()
@Component({
  selector: 'page-gestion-rapport',
  templateUrl: 'gestion-rapport.html',
})
export class GestionRapportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionRapportPage');
  }

private goToNouveauRapportPage(){
  this.navCtrl.push(NouveauRapportPage);
}

goToListeRapportPage(){
  this.navCtrl.push(ListeRapportPage);
}
private goToAccueil(){
  this.navCtrl.push(AccueilPage);
}
}
