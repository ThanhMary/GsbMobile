import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';


import { AccueilPage } from '../accueil/accueil';
import { ListeMedecinPage } from '../liste-medecin/liste-medecin';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';


@IonicPage()
@Component({
  selector: 'page-nouveau-medecin',
  templateUrl: 'nouveau-medecin.html',
})
export class NouveauMedecinPage {
 data={
  nom: '',
  prenom: '',
  adresse:'',
  departement: '',
  tel: '',
  specialiteCommentaire:'',
  type: ''
 }
 result="";
 
constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite, public toast:Toast) {
  
}
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad NouveauMedecinPage');
  }
  saveData(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
  db.executeSql('INSERT INTO praticiens VALUES(NULL,?,?,?,?,?,?,?)', [
    this.data.nom,
    this.data.prenom,
    this.data.adresse,
    this.data.departement,
    this.data.tel,
    this.data.specialiteCommentaire,
    this.data.type
  ])
  .then((res) => {    
    console.log('Executed SQL insert');
    this.toast.show('Done data inserted!','2000','center').subscribe(
      toast => {
        this.showDetailsnouveauMedecin();
      }
    );
  })
  
  }) .catch(e => {
    this.toast.show('error!','4000','center').subscribe(
      toast => {
        console.log(e);
      });
  });
 }
  private goToAccueil(){
    this.navCtrl.push(AccueilPage);
  }
  
 showDetailsnouveauMedecin(){
    this.navCtrl.push(ListeMedecinPage, {
      nomMed: this.data.nom,
      prenomMed: this.data.prenom,
      adresse: this.data.adresse,
      departement: this.data.departement,
      tel: this.data.tel,
      specialite: this.data.specialiteCommentaire,
      type: this.data.type  
    });
}
/*
private createDatabaseFile():void{
  this.sqlite.create({
    name:  DATABASE_FILE_NAME,
    location: 'default'
  })
    .then((db: SQLiteObject) => {
      console.log('BDD créee!');
      this.db = db;  
      this.createTables();   
    })
    .catch(e => console.log(e));
}

private createTables(): void {
  this.db.executeSql('CREATE TABLE IF NOT EXISTS praticiens ( `idPraticien` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `nom` VARCHAR(100) NOT NULL, `prenom` VARCHAR(100) NOT NULL, `adresse` VARCHAR(100) NOT NULL, `tel` VARCHAR(100) NOT NULL, `specialiteComplementaire` VARCHAR(100) NOT NULL, `departement` VARCHAR(100) NOT NULL, `type` VARCHAR(100) NOT NULL) ', {})
  .then(() =>{
     console.log('Table Praticien créée!');
      })
  .catch(e => console.log(e));
}


public savePraticien(){
     this.db.executeSql('INSERT INTO "praticiens" ( nom, prenom, adresse, tel, specialiteComplementaire, departement, typeID) VALEUR (\''+ this.nom + '\', \''+ this.prenom + '\', \''+ this.adresse + '\', \''+ this.tel + '\', \''+ this.departement + '\', \''+ this.type + '\', \''+ this.specialiteCommentaire + '\')', {})
       .then(() =>  {
         console.log('Table Praticien inserée!');
       })
      .catch(e => console.log(e));
    }

public retrieveFilms(){

    }
*/
}//fermeture de classe
