import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
constructor(private sqlite: SQLite) {
     }
  // get  la base de donnée générale
  public getDB() {
    return this.sqlite.create({
      name: 'gsb.db',
      location: 'default'
    });
  }
  // creation de la base de donnée
public createDatabase() {
  return this.getDB()
    .then((db: SQLiteObject) => {
      // Creation des tables
      this.createTables(db);

      // Inserrer des items par défauts
      this.insertDefaultItems(db);

    })
    .catch(e => console.log(e));
}


private createTables(db: SQLiteObject) {
  // création des tables 
  db.sqlBatch([
    //praticien et type de praticien
    ['CREATE TABLE IF NOT EXISTS typePraticiens (idType Text primary key AUTOINCREMENT NOT NULL, libelle TEXT)'],
    ['CREATE TABLE IF NOT EXISTS praticiens (idPraticien integer primary key AUTOINCREMENT NOT NULL, nom TEXT, prenom TEXT, adresse TEXT, tel integer, specialiteComplementaire TEXT, departement TEXT, praticienID integer, FOREIGN KEY(typeID) REFERENCES typePraticiens(idType))'],
    
    //medicament et sa famille
    ['CREATE TABLE IF NOT EXISTS familleMed (idFamille Text primary key AUTOINCREMENT NOT NULL, libelle TEXT)'],
    ['CREATE TABLE IF NOT EXISTS medicaments (idMed integer primary key AUTOINCREMENT NOT NULL, nomCommercial TEXT, composition TEXT, effets TEXT,contreIndication TEXT, familleID integer, FOREIGN KEY(familleID) REFERENCES familleMed(idFamille))'],
      
    //table utilisateur
    ['CREATE TABLE IF NOT EXISTS utilisateur (id Text, nom Text, prenom Text, login Text, password Text, adresse Text, CodePostale Text, dateEmbauche Text)'],

    //table des rapports
    ['CREATE TABLE IF NOT EXISTS rapport(idRapport integer primary key AUTOINCREMENT NOT NULL, date Text, motif Text, bilan Text, praticienID integer, FOREIGN KEY(praticienID) REFERENCES praticien(idPraticien) ) ']


  //  ['CREATE TABLE IF NOT EXISTS categories (id integer primary key AUTOINCREMENT NOT NULL, name TEXT)'],
 //   ['CREATE TABLE IF NOT EXISTS products (id integer primary key AUTOINCREMENT NOT NULL, name TEXT, price REAL, duedate DATE, active integer, category_id integer, FOREIGN KEY(category_id) REFERENCES categories(id))']
  ])
    .then(() => console.log('Tables créées'))
    .catch(e => console.error('Erreur', e));
}

private insertDefaultItems(db: SQLiteObject) {
  db.executeSql('select COUNT(idType) as qtd from typePraticiens', {})
  .then((data: any) => {
    if (data.rows.item(0).qtd == 0) {
      // inserrer plusieurs tables avec sqlBatch
     db.sqlBatch([
      //inserrer type et praticien par défaut  
      ['INSERT INTO typePraticiens (idType, libelle) VALUES (?,?)', ([
        [1, 'MedecinH'],
        [2, 'MedecinF'],
        [3, 'Pharmacien'],
        [4, 'Pharmacienne'],
        [5, 'Chef de Clinique'],
        [6, 'autre']
      ]),
     

      ['INSERT INTO praticiens (idPraticien, nom, prenom, adresse, tel, specialiteComplementaire, typePra, departement) VALUES (?,?,?,?,?,?,?,?)',
        [1,  'Casson', 'Jordan', '91 rue de la pointe NEUVILLE-LES-DAMES 01400', '0466211511', 'NULL', 1, 1],
        [2, 'Balittin', 'Rodolphe', '28 rue des Epines BARENTON-SUR-SERRE 02270', '0332555097', 'NULL',  1, 2],
        [3, 'Chastidien', 'Mohammed', '95 rue des Pigeons SAINT-CREPIN 05600', '0458192855', 'NULL', 6, 5],
        [4, 'De Vinoce', 'Anne-Jeanne', '98 rue Edouard Hériot ASTON 09310', '0570480520', 'MEDECINE DU TRAVAIL',1, 9 ],
        [5, 'Rastuffe', 'Alice', '1 rue des Pigeons MONTCY-NOTRE-DAME 08090', '0364201809', 'ORTHOPEDIE', 1, 8 ],
        [6, 'Anglovert', 'Martin', '81 rue du 14 juillet SAINT-FIRMIN 05800', '0442626779', 'NULL', 4, 5 ],
        [7, 'Chrom', 'sabine', '79 rue du capitaine Crochet LAUNOIS-SUR-VENCE 08430', '0312247583', 'HOMEOPATHIE', 1, 8 ],
        [8, 'Azria', 'Patricia', '42 rue Pernod MAYOT 02800', '0378376370', 'HOMEOPATHIE',2,2 ],
        [9,  'De Mestre', 'Martial', '61 rue du stade FALAISE 08400', '0394411101', 'PEDIATRIE', 1, 8 ],
        [10,  'Mirieux', 'Jérémy', '80 rue Alphonse Daudet AUBENTON 02500', '0334511602', 'NULL',3,2 ]
      ],

      //inserrer famille de medicament et les medicaments
      ['INSERT INTO familleMed (idFamille, libelle) VALUES (?,?)', 
          ['AA', 'Antalgiques en association' ],      
          ['AAA', 'Antalgiques antipyréques en association'],  
          ['AAC', 'Antidépresseur d action centrale' ],  
          ['AAH', 'Antivertigineux antihistaminique H1' ],  
          ['ABA', 'Antibiotique antituberculeux' ],  
          ['ABC', 'Antibiotique antiacnénique local' ],  
          ['ABP', 'Antibiotique de la famille des béta-lactamines -pénicilline A-'],  
          ['AFC', 'Antibiotique de la famille des cyclines' ],  
          ['AFM', 'Antibiotique de la famille des macrolides' ],  
          ['AH', 'Antihistaminique H1 local' ],  
          ['AIM', 'Antidépresseur imipraminique -tricyclique-' ],  
          ['AIN', 'Antidépresseur inhibiteur sélectif de la recapture de la sétonine' ],  
          [ 'ALO', 'Antibiotique local -ORL-'],  
          [ 'ANS', 'Antidépresseur IMAO non sélectif'],  
          ['AO', 'Antibiotique ophtalmique' ],  
          ['AP', 'Antipsychotique normothymique' ],  
          ['AUM', 'Antibiotique urinaire minute' ],  
          ['CRT', 'Corticoide, antibiotique et antifongique à usage local' ],  
           ['HYP', 'Hypnotique antihistaminique' ],  
          ['PSA', 'Psychostimulant antiasthésique']
    ],
    
    ['INSERT INTO medicaments (idMed, nomCommercial, familleID, composition, effets, contreIndication) VALUES (?,?,?,?,?,?)', 
           ['3MYC7', 'TRIMYCINE', 'CRT', 'Triamcinolone acétonide + Néomycine + Nystatine', 'Ce médicament est un corticoïde à  activité forte ou très forte associé à  un antibiotique et un ant', 'Ce médicament est contre-indiqué en cas d allergie à  l un des constituants  d infections de la peau'],
           [ 'ADIMOL9', 'ADIMOL', 'ABP', 'Amoxicilline + Acide clavulanique', 'Ce médicament  plus puissant que les pénicillines simples  est utilisé pour traiter des infections b', 'Ce médicament est contre-indiqué en cas d allergie aux pénicillines ou aux céphalosporines.'],
           [ 'AMOPIL7', 'AMOPIL', 'ABP', 'Amoxicilline', 'Ce médicament  plus puissant que les pénicillines simples  est utilisé pour traiter des infections b', 'Ce médicament est contre-indiqué en cas d allergie aux pénicillines. Il doit être administré avec pr'],
           ['AMOX45', 'AMOXAR', 'ABP', 'Amoxicilline', 'Ce médicament  plus puissant que les pénicillines simples  est utilisé pour traiter des infections b', 'La prise de ce médicament peut rendre positifs les tests de dépistage du dopage.' ],
           ['APATOUX22', 'APATOUX Vitamine C', 'ALO', 'Tyrothricine + Tétracaïne + Acide ascorbique (Vitamine C)', 'Ce médicament est utilisé pour traiter les affections de la bouche et de la gorge.', 'Ce médicament est contre-indiqué en cas d allergie à  l un des constituants  en cas de phénylcétonur' ],
           ['BACTIG10', 'BACTIGEL', 'ABC', 'Erythromycine', 'Ce médicament est utilisé en application locale pour traiter l acné et les infections cutanées bacté', 'Ce médicament est contre-indiqué en cas d allergie aux antibiotiques de la famille des macrolides ou' ],
           [ 'BACTIV13', 'BACTIVIL', 'AFM', 'Erythromycine', 'Ce médicament est utilisé pour traiter des infections bactériennes spécifiques.', 'Ce médicament est contre-indiqué en cas d allergie aux macrolides (dont le chef de file est l érythr'],
           [ 'BITALV', 'BIVALIC', 'AAA', 'Dextropropoxyphène + Paracétamol', 'Ce médicament est utilisé pour traiter les douleurs d intensité modérée ou intense.', 'Ce médicament est contre-indiqué en cas d allergie aux médicaments de cette famille  d insuffisance '],
           [ 'CARTION6', 'CARTION', 'AAA', 'Acide acétylsalicylique (aspirine) + Acide ascorbique (Vitamine C) + Paracétamol', 'Ce médicament est utilisé dans le traitement symptomatique de la douleur ou de la fièvre.', 'Ce médicament est contre-indiqué en cas de troubles de la coagulation (tendances aux hémorragies)d'],
  ],   
  
  // inserrer nom d'utilisateur
  ['INSERT INTO utilisateur(nom, prenom, login, password, adresse, codePostale, dateEmbauche) VALUES(?,?,?,?,?,?,?)',
    ['Thanh', 'Nguyen', 'nguyenthanhmary@yahoo.fr', 'gsb', '10 Bd Jean Berha', '06', '2017']
  ],

  //inserrer quelques rapports
  ['INSERT INTO rapport (idRapport, date, motif, bilan, praticienID) VALUES(?,?,?,?,?)', 
    [1, '2018-20-02', 'Installation nouvelle', 'Jeune médecin découvrant les visiteurs', 10], 
    [2, '2018-10-02', 'Demande du médecin', 'Jeune médecin découvrant les visiteurs', 30 ],
    [3, '2018-10-02', 'Prise de contact', 'Jeune médecin découvrant les visiteurs',1 ],
    [4, '2018-10-02', 'Demande du médecin', 'Pas intéressé du tout', 2],
    [5, '2018-10-02', 'Demande du médecin', 'Peu intéressé', 10],
    [6, '2018-10-02', 'Installation nouvelle', 'Demande à me revoir dans un mois', 12],
    [7, '2018-10-02', 'recommandation de confrère', 'Pas intéressé du tout',15],
    [8, '2018-10-02', 'Installation nouvelle', 'Trop pressé',3],
    [9, '2018-10-02', 'Demande du médecin', 'Demande à me revoir dans un mois',5],
    [10,'2018-10-02', 'recommandation de confrère', 'Très intéressé par les produits présentés', 1]
    ]
  ]
  ])
       // ['insert into categories (name) values (?)', ['Hambúrgueres']],
        //['insert into categories (name) values (?)', ['Bebidas']],
        //['insert into categories (name) values (?)', ['Sobremesas']]
       .then(() => console.log('Data est inserrée'))
        .catch(e => console.error('erreur', e));
    }
  })
  .catch(e => console.error('erreur', e));
  }
}



