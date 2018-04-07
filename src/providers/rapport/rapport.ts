import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider} from '../database/database';

@Injectable()
export class RapportProvider {

  constructor(private dbProvider: DatabaseProvider) {  }
// créer des fonctions de CRUD

//function add data
public insert(rapport: Rapport){
  return this.dbProvider.getDB()
  .then((db: SQLiteObject) =>{
    let sql = 'INSERT INTO rapport (date, motif, bilan, praticienID) VALUES(?,?,?,?)';
    let data= [rapport.date, rapport.motif, rapport.pratiencienID];
    return db.executeSql (sql, data) 
    .catch((e)=>console.error(e));
    })
  .catch((e) => console.error(e));
}

//function update data

public update(rapport: Rapport){
  return this.dbProvider.getDB()
  .then ((db: SQLiteObject)=>{
    let sql = 'update rapport set date=?, motif=?, bilan=?, praticienID=?';
    let data = [ rapport.date, rapport.motif, rapport.bilan, rapport.pratiencienID];
    return db.executeSql(sql, data)
    .catch ((e)=>console.error());
  })
  .catch ((e)=>console.error());
}

// function delete data 

public remove(idRapport: number){
  return this.dbProvider.getDB()
  .then((db: SQLiteObject)=>{ 
    let sql = 'delete from rapport where idRapport=?';
    let data = [idRapport];
      return db.executeSql(sql, data)
    .catch ((e)=>console.error());
  })
  .catch ((e)=>console.error());
}

// function get data
public get(idRapport){
  return this.dbProvider.getDB()
  .then((db:SQLiteObject)=>{
    let sql =' select * from rapport where idRapport=?';
    let data = [idRapport];
    return db.executeSql(sql, data)
    .then ((data: any)=>{
      if (data.rowx.lenght>0){
        let item = data.rows.item(0);
        let rapport = new Rapport();
        rapport.idRapport = item.idRapport;
        rapport.date = item.date;
        rapport.motif = item.motif;
        rapport.bilan = item.bilan;
        rapport.pratiencienID= item.praticienID;

        return rapport;
      }
    return null;
    })
  .catch ((e)=>console.error());
  })
.catch ((e)=>console.error());
}

// function det all data rapport

public getAll(date: Date){
  return this.dbProvider.getDB()
  .then ((db: SQLiteObject)=>{
    let sql = 'select * from rapport where date=?';
    let data = [date]
    return db.executeSql(sql, data)
    .then((data: any)=>{
      if (data.rows.lenght = 0){
        let rapport: any[]= [];
        for (var i=0; i< data.rows.lenght; i++){
        var rapports = data.rows.item(i);
          rapports.push(rapport);
        }
        return rapports
      }else {
        return [];
      }
    }) 
    .catch ((e)=>console.error());
  })
.catch ((e)=>console.error());
}

}
export class Rapport {
  idRapport: number;
  date: Date;
  motif: string;
  bilan: string;
  pratiencienID: number;


}// fermeture de class RapportProvider
