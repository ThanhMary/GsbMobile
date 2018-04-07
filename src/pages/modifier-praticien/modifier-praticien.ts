import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { PraticienProvider, Praticien} from '../../providers/praticien/praticien';
import {TypePraticienProvider} from '../../providers/type-Praticien/type-Praticien';

@IonicPage()
@Component({
  selector: 'page-modifier-praticien',
  templateUrl: 'modifier-praticien.html',
})
export class ModifierPraticienPage {
 model: Praticien;
 typePraticiens: any []

   constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public sqlite:SQLite,
              public toast:Toast, 
              private praticienProvider: PraticienProvider, 
              private typePraProvider: TypePraticienProvider) {
  
  this.model = new Praticien();
   if(this.navParams.data.idPraticien){
     this.praticienProvider.get(this.navParams.data.idPraticien)
        .then((result:any)=>{
          this.model = result;
       })
     }
   }
   
  ionViewDidLoad() {
    this.typePraProvider.getAll()
    .then ((result: any [])=>{
      this.typePraticiens = result;
    })
    .catch(()=>{
      this.toast.show('Error!','2000','center').subscribe(
        toast => {
          this.navCtrl.pop();
               })
            });
         }
  save(){
    this.savePraticien()
    .then (()=>{
      this.toast.show('Praticien enregistré','2000','center').subscribe(
      toast => {
        this.navCtrl.pop();
      })
    })
      .catch(()=>{
        this.toast.show('Error!','2000','center').subscribe(
          toast => {
            this.navCtrl.pop();
        })
      });
  }
  private savePraticien() {
    if(this.model.idPraticien){
      return this.praticienProvider.update(this.model);
    }else{
      return this.praticienProvider.insert(this.model);
    }
  }
  
 }// fermeture de class
