import { TypeDataFestivite } from "./typeDataFestivite"

const dataFestivite: TypeDataFestivite[] = [
  {
    id: 1,//Normalement il ya plusr festivitées donc on peut ajouter fest1, fest2 ect ...
    groupe_ethnique: "Akan",
    sous_groupe: "Baoulé",
    fete: {
      nom: "Fête des Masques",
      type: "Rituel initiatique",
      description: "Célébration annuelle pour honorer les esprits de la forêt et les ancêtres.",
      periode: "Février",
      lieu: "Région de Man",
      duree: "3 jours",
      participants: ["Villageois", "Chefs traditionnels", "Danseurs masqués"],
      activites: ["Danses masquées", "Musique traditionnelle", "Offrandes aux ancêtres"],
      costumes_masques: ["Masques en bois sculpté", "Costumes traditionnels"],
      signification: "Honneur aux ancêtres, cohésion sociale et protection du village",
      images: ["https://exemple.com/fete_masques.jpg"],
      sources: ["Recherches orales auprès des anciens", "Bibliothèque nationale de Côte d’Ivoire"]
    }
  },
  {
    id: 2,
    groupe_ethnique: "Akan",
    sous_groupe: "Agni",
    fete: {
      nom: "Fête des Ignames",
      type: "Cérémonie agricole",
      description: "Célébration de la récolte des ignames, symbole de prospérité.",
      periode: "Octobre",
      lieu: "Région d'Abengourou",
      duree: "2 jours",
      participants: ["Agriculteurs", "Chefs de village", "Communauté locale"],
      activites: ["Offrandes aux divinités", "Danses traditionnelles", "Repas communautaire"],
      costumes_masques: ["Tenues en fibres naturelles", "Masques rituels"],
      signification: "Remerciement aux esprits pour une récolte abondante",
      images: ["https://exemple.com/fete_ignames.jpg"],
      sources: ["Observations sur le terrain", "Publications culturelles locales"]
    }
  },
  {
    id: 3,
    groupe_ethnique: "Mandé",
    sous_groupe: "Sénoufo",
    fete: {
      nom: "Sortie du Poro",
      type: "Rite d'initiation",
      description: "Cérémonie marquant la fin de l'initiation des jeunes hommes au Poro.",
      periode: "Août",
      lieu: "Région de Korhogo",
      duree: "1 semaine",
      participants: ["Jeunes initiés", "Anciens", "Communauté locale"],
      activites: ["Rituels d'initiation", "Danses sacrées", "Cérémonies de purification"],
      costumes_masques: ["Masques en bois sculpté", "Tenues traditionnelles"],
      signification: "Transmission des savoirs ancestraux et intégration à la société adulte",
      images: ["https://exemple.com/sortie_poro.jpg"],
      sources: ["Entretiens avec les chefs traditionnels", "Études ethnographiques"]
    }
  },
  {
    id: 4,
    groupe_ethnique: "Krou",
    sous_groupe: "Bété",
    fete: {
      nom: "Fête de la Moisson",
      type: "Célébration agricole",
      description: "Célébration de la fin de la récolte, marquée par des danses et des chants.",
      periode: "Novembre",
      lieu: "Région de Daloa",
      duree: "3 jours",
      participants: ["Agriculteurs", "Chefs de village", "Communauté locale"],
      activites: ["Danses traditionnelles", "Chants", "Repas communautaire"],
      costumes_masques: ["Tenues en fibres naturelles", "Masques rituels"],
      signification: "Remerciement aux esprits pour une récolte abondante",
      images: ["https://exemple.com/fete_moisson.jpg"],
      sources: ["Observations sur le terrain", "Publications culturelles locales"]
    }
  },
  {
    id: 5,
    groupe_ethnique: "Mandé",
    sous_groupe: "Malinké",
    fete: {
      nom: "Fête de la Nouvelle Lune",
      type: "Célébration spirituelle",
      description: "Célébration marquant le début du mois lunaire, avec des prières et des bénédictions.",
      periode: "Variable",
      lieu: "Région de San Pedro",
      duree: "1 jour",
      participants: ["Prêtres", "Communauté locale"],
      activites: ["Prières", "Bénédictions", "Offrandes"],
      costumes_masques: ["Tenues traditionnelles", "Masques rituels"],
      signification: "Renouvellement spirituel et bénédictions pour le mois à venir",
      images: ["https://exemple.com/fete_nouvelle_lune.jpg"],
      sources: ["Entretiens avec les chefs spirituels", "Études ethnographiques"]
    }
  },
  {
    id: 6,
    groupe_ethnique: "Gour",
    sous_groupe: "Gouro",
    fete: {
      nom: "Fête des Masques",
      type: "Rituel initiatique",
      description: "Célébration des esprits à travers des danses masquées et des chants.",
      periode: "Mars",
      lieu: "Région de Daloa",
      duree: "4 jours",
      participants: ["Danseurs masqués", "Communauté locale"],
      activites: ["Danses masquées", "Chants", "Rituels de purification"],
      costumes_masques: ["Masques en bois sculpté", "Tenues traditionnelles"],
      signification: "Communication avec les esprits et maintien de l'ordre social",
      images: ["https://exemple.com/fete_masques_gouro.jpg"],
      sources: ["Observations sur le terrain", "Publications culturelles locales"]
    }
  },
  {
    id: 7,
    groupe_ethnique: "Krou",
    sous_groupe: "Wê",
    fete: {
      nom: "Fête des Masques",
      type: "Rituel initiatique",
      description: "Célébration des esprits à travers des danses masquées et des chants.",
      periode: "Janvier à avril",
      lieu: "Région de Man",
      duree: "Variable",
      participants: ["Danseurs masqués", "Communauté locale"],
      activites: ["Danses masquées", "Chants", "Rituels de purification"],
      costumes_masques: ["Masques en bois sculpté", "Tenues traditionnelles"],
      signification: "Communication avec les esprits et maintien de l'ordre social",
      images: ["https://exemple.com/fete_masques_we.jpg"],
      sources: ["Observations sur le terrain", "Publications culturelles locales"]
    }
  },
  {
    id: 8,
    groupe_ethnique: "Mandé",
    sous_groupe: "Dan",
    fete: {
      nom: "Fête du Dipri",
      type: "Rituel initiatique",
      description: "Rite nocturne pour purifier le village et éloigner les mauvais esprits.",
      periode: "Avril",
      lieu: "Région de Gomon",
      duree: "1 nuit",
      participants: ["Femmes", "Enfants", "Communauté locale"],
      activites: ["Rituels de purification", "Danses", "Chants"],
      costumes_masques: ["Masques en bois sculpté", "Tenues traditionnelles"],
      signification: "Purification du village et éloignement des mauvais esprits",
      images: ["https://exemple.com/fete_dipri.jpg"],
      sources: ["Observations sur le terrain", "Publications culturelles locales"]
    }
  },
  {
    id: 9,
    groupe_ethnique: "Gour",
    sous_groupe: "Gouro",
    fete: {
      nom: "Fête de l'Initiation des Hommes-Panthères",
      type: "Rituel initiatique",
      description: "Célébration marquant l'initiation des jeunes hommes au statut d'adulte.",
      periode: "Juillet",
      lieu: "Région de Daloa",
      duree: "4 jours",
      participants: ["Jeunes initiés", "Anciens", "Communauté locale"],
      activites: ["Rituels d'initiation", "Danses", "Repas communautaire"],
      costumes_masques: ["Masques en bois sculpté", "Tenues traditionnelles"],
      signification: "Transition vers l'âge adulte et intégration à la société",
      images: ["https://exemple.com/fete_hommes_pantheres.jpg"],
      sources: ["Observations sur le terrain", "Publications culturelles locales"]
    }
  },
  {
    id: 10,
    groupe_ethnique: "Akan",
    sous_groupe: "Bété",
    fete: {
      nom: "Fête des Masques",
      type: "Rituel initiatique",
      description: "Célébration des esprits à travers des danses masquées et des chants.",
      periode: "Janvier à avril",
      lieu: "Région de Daloa",
      duree: "Variable",
      participants: ["Danseurs masqués", "Communauté locale"],
      activites: ["Danses masquées", "Chants", "Rituels de purification"],
      costumes_masques: ["Masques en bois sculpté", "Tenues traditionnelles"],
      signification: "Communication avec les esprits et maintien de l'ordre social",
      images: ["https://exemple.com/fete_masques_bete.jpg"],
      sources: ["Observations sur le terrain", "Publications culturelles locales"]
    }
  },
]
 
console.log(dataFestivite[0].fete.nom);