import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';
  
/**
 * Generated class for the ListeRapportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-rapport',
  templateUrl: 'liste-rapport.html',
})
export class ListeRapportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeRapportPage');
  }
  goToAccueilPage(){
    this.navCtrl.push(AccueilPage);
  }
  affichageRapport(){
    //goto detailsRapport

  }
  supprimerRapport(){
    //delete rapport

  }

}
