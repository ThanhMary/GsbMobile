import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider} from '../database/database';

@Injectable()
export class PraticienProvider {

  constructor(private dbProvider: DatabaseProvider) {  }
// créer des fonctions de CRUD

//function add data
public insert(praticien: Praticien){
  return this.dbProvider.getDB()
  .then((db: SQLiteObject) =>{
    let sql = 'INSERT INTO praticiens (nom, prenom, adresse, tel, specialiteComplementaire, typeID, departement) VALUES (?,?,?,?,?,?,?) where idPraticien?';
    let data = [praticien.nom, praticien.prenom, praticien.adresse, praticien.tel, praticien.specialiteComplementaire, praticien.typePra, praticien.departement ];
    return db.executeSql (sql, data) 
    .catch((e)=>console.error(e));
    })
  .catch((e) => console.error(e));
}

//function update data

public update(praticien: Praticien){
  return this.dbProvider.getDB()
  .then ((db: SQLiteObject)=>{
    let sql = 'update praticiens set nom=?, prenom=?, adresse=?, tel=?, specialiteComplementaire=?, typePra=? departement=?';
    let data = [praticien.nom, praticien.prenom, praticien.adresse, praticien.tel, praticien.specialiteComplementaire, praticien.typePra, praticien.departement ];
    return db.executeSql(sql, data)
    .catch ((e)=>console.error());
  })
  .catch ((e)=>console.error());
}

// function delete data 

public remove(idPraticien: number){
  return this.dbProvider.getDB()
  .then((db: SQLiteObject)=>{ 
    let sql = 'delete from praticiens where idPraticien=?';
    let data = [idPraticien];
      return db.executeSql(sql, data)
    .catch ((e)=>console.error());
  })
  .catch ((e)=>console.error());
}

// function get data
public get(nom){
  return this.dbProvider.getDB()
  .then((db:SQLiteObject)=>{
    let sql =' select * from praticiens where nom=?';
    let data = [nom];
    return db.executeSql(sql, data)
    .then ((data: any)=>{
      if (data.rowx.lenght>0){
        let item = data.rows.item(0);
        let praticien = new Praticien();
        praticien.idPraticien = item.idPraticien;
        praticien.nom = item.nom;
        praticien.prenom = item.prenom;
        praticien.adresse= item.adresse;
        praticien.tel= item.tel;
        praticien.specialiteComplementaire= item.specialiteComplementaire;
        praticien.typePra= item.typePra;
        praticien.departement= item.departement;

        return praticien;
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
        var praticiens = data.rows.item(i);
          praticiens.push(praticien);
        }
        return praticiens;
      }else {
        return [];
      }
    }) 
    .catch ((e)=>console.error());
  })
.catch ((e)=>console.error());
}

}
export class Praticien {
  idPraticien: number;
  nom: string;
  prenom: string;
  adresse : string;
  tel: string;
  specialiteComplementaire: string;
  typePra: string;
  departement: number;

 
}// fermeture de class PraticienProvider
