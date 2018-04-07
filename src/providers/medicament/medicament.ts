import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider} from '../database/database';

@Injectable()
export class MedicamentProvider {

  constructor(private dbProvider: DatabaseProvider) {  }
// créer des fonctions de CRUD

//function add data
public insert(medicament: Medicament){
  return this.dbProvider.getDB()
  .then((db: SQLiteObject) =>{
    let sql = 'INSERT INTO medicament (nomCommercial, familleID, composition, effets, contreIndication) VALUES (?,?,?,?,?) where idMes?';
    let data = [medicament.nomCommercial, medicament.familleID, medicament.composition, medicament.effets, medicament.contreIndication];
    return db.executeSql (sql, data) 
    .catch((e)=>console.error(e));
    })
  .catch((e) => console.error(e));
}

//function update data

public update(medicament: Medicament){
  return this.dbProvider.getDB()
  .then ((db: SQLiteObject)=>{
    let sql = 'update medicaments set nom=?, prenom=?, adresse=?, tel=?, specialiteComplementaire=?, typePra=? departement=?';
    let data = [medicament.nomCommercial, medicament.familleID, medicament.composition, medicament.effets, medicament.contreIndication];
    return db.executeSql(sql, data)
    .catch ((e)=>console.error());
  })
  .catch ((e)=>console.error());
}

// function delete data 

public remove(nomCommercial: string){
  return this.dbProvider.getDB()
  .then((db: SQLiteObject)=>{ 
    let sql = 'delete from medicaments where nomCommercial=?';
    let data = [nomCommercial];
      return db.executeSql(sql, data)
    .catch ((e)=>console.error());
  })
  .catch ((e)=>console.error());
}

// function get data
public get(nomCommercial){
  return this.dbProvider.getDB()
  .then((db:SQLiteObject)=>{
    let sql =' select * from medicaments where nomCommercial=?';
    let data = [nomCommercial];
    return db.executeSql(sql, data)
    .then ((data: any)=>{
      if (data.rowx.lenght>0){
        let item = data.rows.item(0);
        let medicament = new Medicament();
        medicament.idMed = item.idMed;
        medicament.nomCommercial = item.nomCommercial;
        medicament.familleID = item.familleID;
        medicament.effets= item.effets;
        medicament.composition= item.composition;
        medicament.contreIndication= item.contreIndication;
      

        return medicament;
      }
    return null;
    })
  .catch ((e)=>console.error());
  })
.catch ((e)=>console.error());
}

// function det all data rapport

public getAll(){
  return this.dbProvider.getDB()
  .then ((db: SQLiteObject)=>{
    let sql = 'select * from rapport';
    let data = []
    return db.executeSql(sql, data)
    .then((data: any)=>{
      if (data.rows.lenght = 0){
        let praticien: any[]= [];
        for (var i=0; i< data.rows.lenght; i++){
        var medicaments = data.rows.item(i);
        medicaments.push(medicaments);
        }
        return medicaments;
      }else {
        return [];
      }
    }) 
    .catch ((e)=>console.error());
  })
.catch ((e)=>console.error());
}

}
export class Medicament {
  idMed: number;
  nomCommercial: string;
  familleID: string;
  composition: string;
  effets: string;
  contreIndication: string;
  
//'INSERT INTO medicament (idMed, nomCommercial, familleID, composition, effets, contreIndication) VALUES (?,?,?,?,?,?)',
 
}// fermeture de class PraticienProvider
