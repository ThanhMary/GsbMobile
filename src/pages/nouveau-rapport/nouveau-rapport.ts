import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';
import { GestionRapportPage} from '../gestion-rapport/gestion-rapport';


@IonicPage()
@Component({
  selector: 'page-nouveau-rapport',
  templateUrl: 'nouveau-rapport.html',
})
export class NouveauRapportPage {

  date: string;
  motif: string;
  bilan: string;
  praticien: string;
  medicament: string;
  

   constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NouveauRapportPage');
  }
  private goToAccueilPage(){
    this.navCtrl.push(AccueilPage);
  }

}//fermeture de class
