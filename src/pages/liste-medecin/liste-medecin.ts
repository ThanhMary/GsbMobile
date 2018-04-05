import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccueilPage} from '../accueil/accueil';
import { NouveauRapportPage } from '../nouveau-rapport/nouveau-rapport';
import { ModifierPraticienPage } from '../modifier-praticien/modifier-praticien';
import { NouveauMedecinPage } from '../nouveau-medecin/nouveau-medecin';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

@IonicPage()
@Component({
  selector: 'page-liste-medecin',
  templateUrl: 'liste-medecin.html',
})
export class ListeMedecinPage {
  data:any = [];
  
  constructor(public navCtrl: NavController, public sqlite:SQLite,public toast:Toast) {
  }

  
  ionViewDidLoad() {
    this.getData();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getData();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
    
  refresh(){
    this.getData();
  } getData(){
       this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })  .then((db: SQLiteObject) => {
db.executeSql('CREATE TABLE IF NOT EXISTS praticiens (id INTEGER PRIMARY KEY,nom TEXT , prenom TEXT ,adresse TEXT , departement TEXT,tel INT, specialiteComplementaire TEXT, type TEXT)', {})
    .then(() => console.log('Executed SQL'))
            .catch(e => console.log(e));
 
db.executeSql('SELECT * FROM praticiens ORDER BY id DESC',{} )
            .then(res=>{
              console.log('Executed SQL SELECT done' );
              this.data = [];
              for (var index = 1; index < res.rows.length; index++) {
                  this.data.push({
                  id :res.rows.item(index).id ,
                  nom:res.rows.item(index).nom ,
                  prenom:res.rows.item(index).prenom ,
                  tel:res.rows.item(index).tel ,
                  adresse:res.rows.item(index).adresse ,
                  departement:res.rows.item(index).departement ,
                  specialiteComplementaire :res.rows.item(index).specialiteComplementaire ,
                })
              }
            })  .catch(e => console.log(e));
        }) .catch(e => console.log(e));
      }
 
      addPraticien(){
        this.navCtrl.push(NouveauMedecinPage);
      }
  
      editPraticien(id,nom,prenom,tel, adresse, departement, specialiteComplementaire,type ){
        this.navCtrl.push(ModifierPraticienPage,{
          id:id,
          nom:nom,
          prenom:prenom,
          tel:tel,
          adresse:adresse,
          departement:departement,
          specialiteComplementaire:specialiteComplementaire,
          type: type
          });
      }
      
  deletePraticien(id){
      this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
    db.executeSql('DELETE FROM praticiens WHERE id=?', [id])
          .then(() =>{
            console.log('Executed SQL delete');
              this.toast.show('Data will be Deleted! Vous voulez?','3000','center').subscribe(
              toast => {
                this.getData();
              }
            );
           }) .catch(e => console.log(e));
    }) .catch(e => console.log(e));
  
  }
 
    private goToAccueil(){
    this.navCtrl.push(AccueilPage);
  }
  
}
