const DataFestivite = [
  {
    "id": 1,
    "groupe_ethnique": "Akan",
    "sous_groupe": "Baoulé",
    "fete": {
      "nom": "Paquinou",
      "type": "Rassemblement communautaire",
      "description": "Célébration annuelle marquant la fin de la récolte et le retour des fils du pays. Elle inclut des danses traditionnelles, des cérémonies religieuses et des palabres.",
      "periode": "Août",
      "lieu": "Yamoussoukro, Daoukro",
      "duree": "3 jours",
      "participants": ["Villageois", "Chefs traditionnels", "Invités spéciaux"],
      "activites": ["Danses traditionnelles", "Cérémonies religieuses", "Palabres", "Repas communautaires"],
      "costumes_masques": ["Tenues traditionnelles colorées", "Masques rituels"],
      "signification": "Renforcement des liens communautaires et hommage aux ancêtres.",
      "images": ["https://example.com/paquinou.jpg"],
      "sources": ["https://ivoireintellect.mondoblog.org/paquinou-pays-baoule-en-fete/"]
    }
  },
  {
    "id": 2,
    "groupe_ethnique": "Krou",
    "sous_groupe": "Bété",
    "fete": {
      "nom": "Festival des danses Bété",
      "type": "Festival culturel",
      "description": "Manifestation mettant en avant les danses et musiques traditionnelles Bété, avec des concours et des expositions.",
      "periode": "Juillet",
      "lieu": "Gagnoa, Oumé",
      "duree": "2 jours",
      "participants": ["Danseurs", "Musiciens", "Spectateurs"],
      "activites": ["Concours de danse", "Expositions artisanales", "Ateliers de musique"],
      "costumes_masques": ["Tenues traditionnelles Bété", "Masques rituels"],
      "signification": "Préservation et valorisation du patrimoine culturel Bété.",
      "images": ["https://example.com/festival_bete.jpg"],
      "sources": ["https://www.mairieguiberoua.ci/detail-culture-et-tourisme/90/les-danses-du-pays-bete"]
    }
  },
  {
    "id": 3,
    "groupe_ethnique": "Mandé",
    "sous_groupe": "Sénoufo",
    "fete": {
      "nom": "Festi-Ponvogo",
      "type": "Festival culturel",
      "description": "Célébration des traditions et coutumes sénoufo, incluant des danses, des chants et des cérémonies rituelles.",
      "periode": "Décembre",
      "lieu": "Korhogo",
      "duree": "3 jours",
      "participants": ["Communauté sénoufo", "Visiteurs", "Artistes"],
      "activites": ["Danses traditionnelles", "Chants", "Cérémonies rituelles"],
      "costumes_masques": ["Tenues traditionnelles sénoufo", "Masques rituels"],
      "signification": "Renforcement de l'identité culturelle sénoufo.",
      "images": ["https://example.com/festi_ponvogo.jpg"],
      "sources": ["https://destinationafrique.io/pays-senoufo-traditions-rites-et-mysteres-devoiles/"]
    }
  },
  {
    "id": 4,
    "groupe_ethnique": "Mandé",
    "sous_groupe": "Malinké",
    "fete": {
      "nom": "Fête des Masques",
      "type": "Cérémonie rituelle",
      "description": "Rite initiatique marquant le passage à l'âge adulte, avec des danses masquées et des chants traditionnels.",
      "periode": "Février",
      "lieu": "Odienné",
      "duree": "2 jours",
      "participants": ["Initiés", "Chefs traditionnels", "Spectateurs"],
      "activites": ["Danses masquées", "Chants traditionnels", "Cérémonies rituelles"],
      "costumes_masques": ["Masques en bois sculpté", "Tenues traditionnelles"],
      "signification": "Transmission des valeurs et traditions aux nouvelles générations.",
      "images": ["https://example.com/fete_masques_malinké.jpg"],
      "sources": ["https://fr.wikipedia.org/wiki/Malink%C3%A9s"]
    }
  },
  {
    "id": 5,
    "groupe_ethnique": "Mandé",
    "sous_groupe": "Gour",
    "fete": {
      "nom": "Sakaralié",
      "type": "Rite de pluie",
      "description": "Célébration visant à invoquer la divinité Sakara pour obtenir la pluie, avec des danses et des chants.",
      "periode": "Juin",
      "lieu": "Korhogo",
      "duree": "1 jour",
      "participants": ["Danseurs", "Chanteurs", "Chefs traditionnels"],
      "activites": ["Danses rituelles", "Chants", "Offrandes"],
      "costumes_masques": ["Peintures corporelles", "Tenues traditionnelles"],
      "signification": "Assurer une bonne récolte et la prospérité de la communauté.",
      "images": ["https://example.com/sakaralie.jpg"],
      "sources": ["https://www.africamuseum.be/sites/default/files/media/docs/research/publications/rmca/online/documents-social-sciences-humanities/musique_gour.pdf"]
    }
  },
  {
    "id": 6,
    "groupe_ethnique": "Krou",
    "sous_groupe": "Attié",
    "fete": {
      "nom": "Fête des Ignames",
      "type": "Rite agricole",
      "description": "Célébration marquant la fin de la récolte des ignames, avec des danses et des offrandes aux ancêtres.",
      "periode": "Février",
      "lieu": "Tiagba",
      "duree": "1 jour",
      "participants": ["Agriculteurs", "Chefs traditionnels", "Communauté locale"],
      "activites": ["Danses traditionnelles", "Offrandes", "Repas communautaires"],
      "costumes_masques": ["Tenues traditionnelles Attié", "Masques rituels"],
      "signification": "Remerciement aux ancêtres et aux divinités pour la récolte.",
      "images": ["https://example.com/fete_ignames_attie.jpg"],
      "sources": ["https://fr.wikipedia.org/wiki/Atti%C3%A9_%28peuple%29"]
    }
  },
  {
    "id": 7,
    "groupe_ethnique": "Krou",
    "sous_groupe": "Dida",
    "fete": {
      "nom": "Fête des Masques",
      "type": "Cérémonie rituelle",
      "description": "Rite initiatique avec des danses masquées et des chants traditionnels.",
      "periode": "Mars",
      "lieu": "San Pedro",
      "duree": "2 jours",
      "participants": ["Initiés", "Chefs traditionnels", "Spectateurs"],
      "activites": ["Danses masquées", "Chants traditionnels", "Cérémonies rituelles"],
      "costumes_masques": ["Masques en bois", "Tenues traditionnelles Dida"],
      "signification": "Transmission des valeurs culturelles et spirituelles.",
      "images": ["https://example.com/fete_masques_dida.jpg"],
      "sources": ["https://leschroniquesdetchonte.com/2016/12/04/quand-senoufo-rencontre-bete/"]
    }
  },
  {
    "id": 8,
    "groupe_ethnique": "Mandé",
    "sous_groupe": "Bambara",
    "fete": {
      "nom": "Fête des Ancêtres",
      "type": "Cérémonie spirituelle",
      "description": "Célébration en l'honneur des ancêtres, avec des danses, des chants et des offrandes.",
      "periode": "Novembre",
      "lieu": "Odienné",
      "duree": "1 jour",
      "participants": ["Communauté bambara", "Chefs spirituels", "Spectateurs"],
      "activites": ["Danses traditionnelles", "Chants", "Offrandes aux ancêtres"],
      "costumes_masques": ["Tenues traditionnelles bambara", "Masques rituels"],
      "signification": "Maintien du lien avec les ancêtres et préservation des traditions.",
      "images": ["https://example.com/fete_ancetres_bambara.jpg"],
      "sources": ["https://fr.wikipedia.org/wiki/Malink%C3%A9s"]
    }
  },
  {
    "id": 9,
    "groupe_ethnique": "Mandé",
    "sous_groupe": "Dioula",
    "fete": {
      "nom": "Fête de la Nouvelle Lune",
      "type": "Célébration islamique",
      "description": "Célébration marquant le début du mois lunaire, avec des prières et des festins.",
      "periode": "Chaque mois",
      "lieu": "Korhogo",
      "duree": "1 jour",
      "participants": ["Communauté musulmane", "Chefs religieux", "Spectateurs"],
      "activites": ["Prières", "Festins communautaires", "Échanges culturels"],
      "costumes_masques": ["Tenues traditionnelles musulmanes", "Vêtements festifs"],
      "signification": "Renforcement des liens communautaires et spirituels.",
      "images": ["https://example.com/fete_nouvelle_lune_doula
::contentReference[oaicite:0]{index=0}
 
