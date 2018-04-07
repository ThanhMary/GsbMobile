
CREATE TABLE IF NOT EXISTS `type` (
	`idType`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`libelle`	TEXT
);
INSERT INTO `type` (libelle) VALUES ('Médecin'), ('Pharmacien'), ('chef de Clinique'), ('Autre');


CREATE TABLE IF NOT EXISTS `praticiens` (
	`idPraticien`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`nom`	TEXT NOT NULL,
	`prenom`	TEXT NOT NULL,
	`adresse`	TEXT NOT NULL,
	`tel`	TEXT NOT NULL,
	`specialiteComplementaire`	TEXT,
	`departement`	INTEGER NOT NULL,
	`typeID`	INTEGER NOT NULL,
	FOREIGN KEY(`typeID`) REFERENCES `type`(`idType`)
);

INSERT INTO `praticiens` (idPraticien, typeID, nom, prenom, adresse, tel, specialiteComplementaire, departement) VALUES
(1, 1, 'Casson', 'Jordan', '91 rue de la pointe NEUVILLE-LES-DAMES 01400', '0466211511', NULL, 1),
(2, 2, 'Balittin', 'Rodolphe', '28 rue des Epines BARENTON-SUR-SERRE 02270', '0332555097', NULL, 2),
(3, 3, 'Chastidien', 'Mohammed', '95 rue des Pigeons SAINT-CREPIN 05600', '0458192855', NULL, 5),
(4, 4, 'De Vinoce', 'Anne-Jeanne', '98 rue Edouard Hériot ASTON 09310', '0570480520', 'MEDECINE DU TRAVAIL', 9),
(5, 1, 'Rastuffe', 'Alice', '1 rue des Pigeons MONTCY-NOTRE-DAME 08090', '0364201809', 'ORTHOPEDIE', 8),
(6, 2, 'Anglovert', 'Martin', '81 rue du 14 juillet SAINT-FIRMIN 05800', '0442626779', NULL, 5),
(7, 3, 'Chrom', 'sabine', '79 rue du capitaine Crochet LAUNOIS-SUR-VENCE 08430', '0312247583', 'HOMEOPATHIE', 8),
(8, 4, 'Azria', 'Patricia', '42 rue Pernod MAYOT 02800', '0378376370', 'HOMEOPATHIE', 2),
(9, 1, 'De Mestre', 'Martial', '61 rue du stade FALAISE 08400', '0394411101', 'PEDIATRIE', 8),
(10, 2, 'Mirieux', 'Jérémy', '80 rue Alphonse Daudet AUBENTON 02500', '0334511602', NULL, 2),
(11, 3, 'Yoi', 'Anne-Lucie', '73 rue des oiseaux ROCHEBRUNE 05190', '0422455411', 'NEUROLOGIE', 5),
(12, 1, 'Farahoui', 'Jérémy', '96 rue des Armées FLEVILLE 08250', '0326503008', NULL, 8),
(13, 2, 'Mirieux', 'Robert', '2 rue Malraux MONTCY-NOTRE-DAME 08090', '0362575360', 'GERIATRIE', 8),
(14, 3, 'Berzinne', 'Bertrand', '82 rue Edouard Hériot TRAVECY 02800', '0328325378', 'ALLERGOLOGIE', 2),
(15, 4, 'Dusel', 'Patrice', '23 rue des Anges MEZIERES-SUR-OISE 02240', '0399909852', NULL, 2),
(16, 1, 'Englebert', 'Hector', '82 rue du capitaine Fraquasse SAINT-FIRMIN 05800', '0472521988', 'OSTEOPATHIE', 5),
(17, 2, 'Harviche', 'Patricia', '60 rue des Néfliers LAUNOIS-SUR-VENCE 08430', '0368024715', 'PSYCHIATRIE', 8),
(18, 3, 'Hariche', 'Françoise', '61 rue du 14 juillet BEZAC 09100', '0580571663', 'ORTHOPEDIE', 9),
(19, 1, 'Cher', 'Irénée', '12 rue Petit BEDEILLE 09230', '0591559899', NULL, 9),
(20, 2, 'Bilhian', 'Anne-Ange', '80 rue Lampion NEUVILLE-LES-DAMES 01400', '0476391855', NULL, 1),
(21, 3, 'Pizoulais', 'Serge', '7 rue Lampion ARROUT 09800', '0527135259', NULL, 9),
(22, 1, 'Lupez', 'Jérome', '92 rue du général de Gaulle EVIGNY 08090', '0330372026', NULL, 8),
(23, 2, 'Balittin', 'André', '69 rue de la poste ROCHEBRUNE 05190', '0465982912', NULL, 5),
(24, 3, 'Cerpicote', 'Armelle', '46 rue du capitaine Crochet THIN-LE-MOUTIER 08460', '0373470105', NULL, 8),
(25, 1, 'Restiffe', 'Yoan', '70 rue des hirondelles HAUTEVILLE 02120', '0381472548', 'NEPHROLOGIE', 2),
(26, 2, 'Di Rei', 'Jérémie', '20 rue des Néfliers SAINT-FIRMIN 05800', '0458876102', NULL, 5),
(27, 3, 'Cassolette', 'François', '73 rue de Paris BOURG-EN-BRESSE 01000', '0427750138', NULL, 1),
(28, 1, 'Lièvre', 'Astine', '71 rue des Princes THIN-LE-MOUTIER 08460', '0319796291', NULL, 8),
(29, 2, 'Hatiche', 'Annie', '7 rue des Armées REOTIER 05600', '0464634781', 'ALLERGOLOGIE', 5),
(30, 3, 'Vispendieux', 'Alain', '67 rue du stade BOURG-EN-BRESSE 01000', '0429968625', NULL, 1);


CREATE TABLE IF NOT EXISTS `familleMed` (
	`idFamille`	TEXT NOT NULL PRIMARY KEY UNIQUE,
	`libelle`	TEXT NOT NULL
);

INSERT INTO `familleMed` (`idFamille`, `libelle`) VALUES
('AA', 'Antalgiques en association'),
('AAA', 'Antalgiques antipyréques en association'),
('AAC', 'Antidépresseur d action centrale'),
('AAH', 'Antivertigineux antihistaminique H1'),
('ABA', 'Antibiotique antituberculeux'),
('ABC', 'Antibiotique antiacnénique local'),
('ABP', 'Antibiotique de la famille des béta-lactamines -pénicilline A-'),
('AFC', 'Antibiotique de la famille des cyclines'),
('AFM', 'Antibiotique de la famille des macrolides'),
('AH', 'Antihistaminique H1 local'),
('AIM', 'Antidépresseur imipraminique -tricyclique-'),
('AIN', 'Antidépresseur inhibiteur sélectif de la recapture de la sétonine'),
('ALO', 'Antibiotique local -ORL-'),
('ANS', 'Antidépresseur IMAO non sélectif'),
('AO', 'Antibiotique ophtalmique'),
('AP', 'Antipsychotique normothymique'),
('AUM', 'Antibiotique urinaire minute'),
('CRT', 'Corticoide, antibiotique et antifongique à usage local'),
('HYP', 'Hypnotique antihistaminique'),
('PSA', 'Psychostimulant antiasthésique');


CREATE TABLE IF NOT EXISTS `medicaments` (
	`idMed`	TEXT NOT NULL PRIMARY KEY UNIQUE,
	`nomCommercial`	TEXT NOT NULL,
    `composition`	TEXT NOT NULL,
	`effets`	TEXT NOT NULL,
	`contreIndication`	TEXT NOT NULL,
	`familleID`	INTEGER NOT NULL,
	FOREIGN KEY(`familleID`) REFERENCES `familleMed`(`idFamille`)
);

INSERT INTO `medicaments` (idMed, nomCommercial, familleID, composition, effets, contreIndication) VALUES
('3MYC7', 'TRIMYCINE', 'CRT', 'Triamcinolone acétonide + Néomycine + Nystatine', 'Ce médicament est un corticoïde à  activité forte ou très forte associé à  un antibiotique et un ant', 'Ce médicament est contre-indiqué en cas d allergie à  l un des constituants  d infections de la peau'),
('ADIMOL9', 'ADIMOL', 'ABP', 'Amoxicilline + Acide clavulanique', 'Ce médicament  plus puissant que les pénicillines simples  est utilisé pour traiter des infections b', 'Ce médicament est contre-indiqué en cas d allergie aux pénicillines ou aux céphalosporines.'),
('AMOPIL7', 'AMOPIL', 'ABP', 'Amoxicilline', 'Ce médicament  plus puissant que les pénicillines simples  est utilisé pour traiter des infections b', 'Ce médicament est contre-indiqué en cas d allergie aux pénicillines. Il doit être administré avec pr'),
('AMOX45', 'AMOXAR', 'ABP', 'Amoxicilline', 'Ce médicament  plus puissant que les pénicillines simples  est utilisé pour traiter des infections b', 'La prise de ce médicament peut rendre positifs les tests de dépistage du dopage.'),
('AMOXIG12', 'AMOXI Gé', 'ABP', 'Amoxicilline', 'Ce médicament  plus puissant que les pénicillines simples  est utilisé pour traiter des infections b', 'Ce médicament est contre-indiqué en cas d allergie aux pénicillines. Il doit être administré avec pr'),
('APATOUX22', 'APATOUX Vitamine C', 'ALO', 'Tyrothricine + Tétracaïne + Acide ascorbique (Vitamine C)', 'Ce médicament est utilisé pour traiter les affections de la bouche et de la gorge.', 'Ce médicament est contre-indiqué en cas d allergie à  l un des constituants  en cas de phénylcétonur'),
('BACTIG10', 'BACTIGEL', 'ABC', 'Erythromycine', 'Ce médicament est utilisé en application locale pour traiter l acné et les infections cutanées bacté', 'Ce médicament est contre-indiqué en cas d allergie aux antibiotiques de la famille des macrolides ou'),
('BACTIV13', 'BACTIVIL', 'AFM', 'Erythromycine', 'Ce médicament est utilisé pour traiter des infections bactériennes spécifiques.', 'Ce médicament est contre-indiqué en cas d allergie aux macrolides (dont le chef de file est l érythr'),
('BITALV', 'BIVALIC', 'AAA', 'Dextropropoxyphène + Paracétamol', 'Ce médicament est utilisé pour traiter les douleurs d intensité modérée ou intense.', 'Ce médicament est contre-indiqué en cas d allergie aux médicaments de cette famille  d insuffisance '),
('CARTION6', 'CARTION', 'AAA', 'Acide acétylsalicylique (aspirine) + Acide ascorbique (Vitamine C) + Paracétamol', 'Ce médicament est utilisé dans le traitement symptomatique de la douleur ou de la fièvre.', 'Ce médicament est contre-indiqué en cas de troubles de la coagulation (tendances aux hémorragies)  d'),
('CLAZER6', 'CLAZER', 'AFM', 'Clarithromycine', 'Ce médicament est utilisé pour traiter des infections bactériennes spécifiques. Il est également uti', 'Ce médicament est contre-indiqué en cas d allergie aux macrolides (dont le chef de file est l érythr'),
('DEPRIL9', 'DEPRAMIL', 'AIM', 'Clomipramine', 'Ce médicament est utilisé pour traiter les épisodes dépressifs sévères  certaines douleurs rebelles ', 'Ce médicament est contre-indiqué en cas de glaucome ou d adénome de la prostate  d infarctus récent '),
('DIMIRTAM6', 'DIMIRTAM', 'AAC', 'Mirtazapine', 'Ce médicament est utilisé pour traiter les épisodes dépressifs sévères.', 'La prise de ce produit est contre-indiquée en cas de d allergie à  l un des constituants.'),
('DOLRIL7', 'DOLORIL', 'AAA', 'Acide acétylsalicylique (aspirine) + Acide ascorbique (Vitamine C) + Paracétamol', 'Ce médicament est utilisé dans le traitement symptomatique de la douleur ou de la fièvre.', 'Ce médicament est contre-indiqué en cas d allergie au paracétamol ou aux salicylates.'),
('DORNOM8', 'NORMADOR', 'HYP', 'Doxylamine', 'Ce médicament est utilisé pour traiter l insomnie chez l adulte.', 'Ce médicament est contre-indiqué en cas de glaucome  de certains troubles urinaires (rétention urina'),
('EQUILARX6', 'EQUILAR', 'AAH', 'Méclozine', 'Ce médicament est utilisé pour traiter les vertiges et pour prévenir le mal des transports.', 'Ce médicament ne doit pas être utilisé en cas d allergie au produit  en cas de glaucome ou de rétent'),
('EVILR7', 'EVEILLOR', 'PSA', 'Adrafinil', 'Ce médicament est utilisé pour traiter les troubles de la vigilance et certains symptomes neurologiq', 'Ce médicament est contre-indiqué en cas d allergie à  l un des constituants.'),
('INSXT5', 'INSECTIL', 'AH', 'Diphénydramine', 'Ce médicament est utilisé en application locale sur les piqûres d insecte et l urticaire.', 'Ce médicament est contre-indiqué en cas d allergie aux antihistaminiques.'),
('JOVAI8', 'JOVENIL', 'AFM', 'Josamycine', 'Ce médicament est utilisé pour traiter des infections bactériennes spécifiques.', 'Ce médicament est contre-indiqué en cas d allergie aux macrolides (dont le chef de file est l érythr'),
('LIDOXY23', 'LIDOXYTRACINE', 'AFC', 'Oxytétracycline +Lidocaïne', 'Ce médicament est utilisé en injection intramusculaire pour traiter certaines infections spécifiques', 'Ce médicament est contre-indiqué en cas d allergie à  l un des constituants. Il ne doit pas être ass'),
('LITHOR12', 'LITHORINE', 'AP', 'Lithium', 'Ce médicament est indiqué dans la prévention des psychoses maniaco-dépressives ou pour traiter les é', 'Ce médicament ne doit pas être utilisé si vous êtes allergique au lithium. Avant de prendre ce trait'),
('PARMOL16', 'PARMOCODEINE', 'AA', 'Codéine + Paracétamol', 'Ce médicament est utilisé pour le traitement des douleurs lorsque des antalgiques simples ne sont pa', 'Ce médicament est contre-indiqué en cas d allergie à  l un des constituants  chez l enfant de moins '),
('PHYSOI8', 'PHYSICOR', 'PSA', 'Sulbutiamine', 'Ce médicament est utilisé pour traiter les baisses d activité physique ou psychique  souvent dans un', 'Ce médicament est contre-indiqué en cas d allergie à  l un des constituants.'),
('PIRIZ8', 'PIRIZAN', 'ABA', 'Pyrazinamide', 'Ce médicament est utilisé  en association à  d autres antibiotiques  pour traiter la tuberculose.', 'Ce médicament est contre-indiqué en cas d allergie à  l un des constituants  d insuffisance rénale o'),
('POMDI20', 'POMADINE', 'AO', 'Bacitracine', 'Ce médicament est utilisé pour traiter les infections oculaires de la surface de l oeil.', 'Ce médicament est contre-indiqué en cas d allergie aux antibiotiques appliqués localement.'),
('TROXT21', 'TROXADET', 'AIN', 'Paroxétine', 'Ce médicament est utilisé pour traiter la dépression et les troubles obsessionnels compulsifs. Il pe', 'Ce médicament est contre-indiqué en cas d allergie au produit.'),
('TXISOL22', 'TOUXISOL', 'ALO', 'Tyrothricine + Acide ascorbique (Vitamine C)', 'Ce médicament est utilisé pour traiter les affections de la bouche et de la gorge.', 'Ce médicament est contre-indiqué en cas d allergie à  l un des constituants et chez l enfant de moin'),
('URIEG6', 'URIREGUL', 'AUM', 'Fosfomycine trométamol', 'Ce médicament est utilisé pour traiter les infections urinaires simples chez la femme de moins de 65', 'La prise de ce médicament est contre-indiquée en cas d allergie à l un des constituants et d insuffi');

CREATE TABLE IF NOT EXISTS `visiteur` (
	`idVisiteur`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`nom`	TEXT NOT NULL,
	`prenom`	TEXT NOT NULL,
	`pseudologin`	TEXT NOT NULL UNIQUE,
	`mdp`	TEXT NOT NULL,
	`adresse`	TEXT,
	`cp`	TEXT,
	`dateEmbauche`	DATE
);
INSERT INTO `visiteur`(nom, prenom, pseudologin, mdp, adresse, cp, dateEmbauche) 
VALUES ('Nguyen', 'Thanh', 'thanhmary@gmail.com', 'gsb107', '10 Bd Jean Berha', '06','06/09/2016');

CREATE TABLE IF NOT EXISTS `offrir` (
	`quantité`	INTEGER NOT NULL,
	`idMedicament`	INTEGER NOT NULL,
	`idRapport`	INTEGER NOT NULL,
	PRIMARY KEY(`idRapport`,`idMedicament`)
);

CREATE TABLE IF NOT EXISTS `rapports` (
	`idRapport`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`date`	TEXT NOT NULL,
	`motif`	TEXT NOT NULL,
	`bilan`	TEXT NOT NULL,
	`praticienID`	INTEGER NOT NULL,
	`visiteurID`	INTEGER NOT NULL,
	FOREIGN KEY(`praticienID`) REFERENCES `praticiens`(`idPraticien`),
	FOREIGN KEY(`visiteurID`) REFERENCES `visiteur`(`idVisiteur`)
);

INSERT INTO `rapports`(idRapport, date, motif, bilan, visiteurID, praticienID) VALUES
(1, '2018-20-02', 'Installation nouvelle', 'Jeune médecin découvrant les visiteurs', 1, 10),
(2, '2018-10-02', 'Demande du médecin', 'Jeune médecin découvrant les visiteurs', 1, 30),
(3, '2018-10-02', 'Prise de contact', 'Jeune médecin découvrant les visiteurs', 1, 1),
(4, '2018-10-02', 'Demande du médecin', 'Pas intéressé du tout', 1, 2),
(5, '2018-10-02', 'Demande du médecin', 'Peu intéressé', 1, 10),
(6, '2018-10-02', 'Installation nouvelle', 'Demande à me revoir dans un mois', 1, 12),
(7, '2018-10-02', 'recommandation de confrère', 'Pas intéressé du tout', 1, 15),
(8, '2018-10-02', 'Installation nouvelle', 'Trop pressé', 1, 3),
(9, '2018-10-02', 'Demande du médecin', 'Demande à me revoir dans un mois', 1, 5),
(10,'2018-10-02', 'recommandation de confrère', 'Très intéressé par les produits présentés', 1, 7);
