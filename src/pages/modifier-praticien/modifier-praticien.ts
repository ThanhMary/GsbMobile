import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

@IonicPage()
@Component({
  selector: 'page-modifier-praticien',
  templateUrl: 'modifier-praticien.html',
})
export class ModifierPraticienPage {
  data={
    id: 0,
    nom: '',
    prenom: '',
    adresse:'',
    tel: '',
    specialiteCommentaire:'',
    departement: '',
    type: ''
  
   }
  constructor(public navCtrl: NavController, public navParams: NavParams, public sqlite:SQLite,public toast:Toast) {
    this.data.id = navParams.get('id');
    this.data.nom = navParams.get('nom');
    this.data.prenom = navParams.get('prenom');
    this.data.tel = navParams.get('tel');
    this.data.adresse = navParams.get('adresse');
    this.data.departement = navParams.get('departement');
    this.data.specialiteCommentaire = navParams.get('specialiteComplementaire');
    this.data.type = navParams.get('type');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifierPraticienPage');
  }
  update(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })  .then((db: SQLiteObject) => {
  db.executeSql('UPDATE praticiens set nom=?,prenom=?,tel=?,adresse=?, depatement=?, specialitecomplementaire=? type=? WHERE id=?', [
    this.data.nom,
    this.data.prenom,
    this.data.tel,
    this.data.adresse,
    this.data.departement,
    this.data.specialiteCommentaire,
    this.data.type,
    this.data.id
  ])
  .then((res) => {
    console.log('Executed SQL insert');
    this.toast.show('Done data updated!','2000','center').subscribe(
      toast => {
        this.navCtrl.pop();
      }
    );
  
  })
          .catch(e => console.log(e));
  }) .catch(e => console.log(e));
 
  }
 }
