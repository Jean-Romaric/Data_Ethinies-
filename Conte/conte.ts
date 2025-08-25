import { typeDataConte } from "./typeDataConte"


const dataConteta: typeDataConte[] = 
[
  {
    id: 1,
    groupe_ethnique: "Akan",
    sous_groupe: "Baoulé",
    contes: {//Normalement il ya plusr contes donc on peut ajouter cont1, Cont2 ect ...
      titre: "La légende d’Abla Pokou",
      conte: "Reine fuyant l’Ashanti, Pokou sacrifie son fils pour apaiser l’esprit de la rivière et permettre au peuple de traverser. Après le passage, elle dit « Ba-ouli » (« l’enfant est mort »), d’où le nom Baoulé.",
      personnages: ["Abla Pokou", "le peuple baoulé", "les esprits de la rivière"],
      morale: "Le sacrifice pour le salut collectif et la naissance d’un peuple.",
      langue_origine: "Baoulé (akan)",
      region: "Centre de la Côte d’Ivoire",
      occasion: ["Veillées de contes", "Fêtes commémoratives"],
      themes: ["Origines", "Sacrifice", "Migration"],
      images: ["https://upload.wikimedia.org/wikipedia/commons/8/80/Pokou_fresco_example.jpg"],
      audio: [],
      video: ["https://www.youtube.com/watch?v=ud3f8C8VfYo"]
    },
    sources: [
      "https://fr.wikipedia.org/wiki/Abla_Pokou",
      "https://scholarblogs.emory.edu/epi/files/2022/02/Tadjo-Reine-Pokou-Laterite.pdf"
    ]
  },

  {
    id: 2,
    groupe_ethnique: "Sénoufo",
    sous_groupe: "Sénoufo (Korhogo)",
    contes: {
      titre: "Ta’nourou (le conte de l’écoute)",
      conte: "Histoire d’un jeune qui apprend que l’écoute attentive des anciens permet d’éviter les conflits et d’être admis au Poro.",
      personnages: ["Ta’nourou", "vieux sages", "initiés du Poro"],
      morale: "Écouter est une vertu sociale qui garantit l’harmonie.",
      langue_origine: "Sénoufo",
      region: "Nord (Korhogo et environs)",
      occasion: ["Veillées", "Périodes d’initiation"],
      themes: ["Initiation", "Respect des aînés", "Sagesse"],
      images: [],
      audio: [],
      video: []
    },
    sources: [
      "https://djiboul.org/wp-content/uploads/2023/03/Tire-a-part_24.pdf",
      "https://excerpts.numilog.com/books/9782307507468.pdf"
    ]
  },

  {
    id: 3,
    groupe_ethnique: "Mande",
    sous_groupe: "Dan (Yacouba)",
    contes: {
      titre: "L’araignée cupide",
      conte: "Dans un village dan, une araignée avare trompe ses voisins jusqu’à ce que sa cupidité soit dévoilée; la communauté la punit et rétablit l’ordre.",
      personnages: ["L’araignée", "villageois", "chef coutumier"],
      morale: "La cupidité finit toujours par se retourner contre soi.",
      langue_origine: "Dan",
      region: "Ouest montagneux (Man, Danané)",
      occasion: ["Veillées", "Éducation des enfants"],
      themes: ["Avarice", "Justice communautaire", "Ruse"],
      images: [],
      audio: [],
      video: []
    },
    sources: [
      "https://dicames.online/jspui/bitstream/20.500.12177/2603/1/CS_07209.pdf",
      "https://fr.wikipedia.org/wiki/Dan_(peuple)"
    ]
  },

  {
    id: 4,
    groupe_ethnique: "Mande",
    sous_groupe: "Guro (Gourou)",
    contes: {
      titre: "Zamble, Gu et Zuali",
      conte: "Récit des esprits Zamble (créature mythique), de sa belle épouse Gu et de son frère Zuali. Ils protègent le village, arbitrent les conflits et rétablissent l’équilibre entre brousse et cité.",
      personnages: ["Zamble", "Gu", "Zuali", "devins", "familles gardiennes"],
      morale: "L’équilibre social naît de la médiation entre mondes visibles et invisibles.",
      langue_origine: "Guro",
      region: "Centre-Ouest",
      occasion: ["Funérailles de dignitaires", "Grandes fêtes"],
      themes: ["Protection", "Médiation", "Cosmologie"],
      images: ["https://images.metmuseum.org/CRDImages/ao/original/DP213642.jpg"],
      audio: [],
      video: []
    },
    sources: [
      "https://www.metmuseum.org/art/collection/search/312308",
      "https://journals.openedition.org/ethnoecologie/6216",
      "https://quod.lib.umich.edu/m/musart/x-2002-sl-2.348/*"
    ]
  },

  {
    id: 5,
    groupe_ethnique: "Krou",
    sous_groupe: "Bété",
    contes: {
      titre: "Un conte bété et son narrateur (tradition orale)",
      conte: "Conte animalier où un petit rongeur rusé déjoue la force de prédateurs; l’article met en scène la performance du conteur et le rôle du public.",
      personnages: ["Rongeur rusé", "prédateurs", "conteur", "auditoire"],
      morale: "La parole performée fonde la morale et la cohésion sociale.",
      langue_origine: "Bété",
      region: "Centre-Ouest (Gagnoa, Daloa)",
      occasion: ["Veillées", "Cérémonies familiales"],
      themes: ["Ruse", "Performance du conte", "Cohésion sociale"],
      images: [],
      audio: [],
      video: []
    },
    sources: [
      "https://www.persee.fr/doc/gradh_0764-8928_1986_num_1_1_974",
      "https://www.persee.fr/doc/cea_0008-0055_1968_num_8_30_3349"
    ]
  },

  {
    id: 6,
    groupe_ethnique: "Krou",
    sous_groupe: "Wê (Guéré/Wobé)",
    contes: {
      titre: "Le Gba (mythe Wê)",
      conte: "Récits mythiques autour du Gba, forces surnaturelles ordonnant la vie sociale; des héros affrontent génies et hommes-panthères pour restaurer l’ordre.",
      personnages: ["Héros Wê", "Génies du Gba", "hommes-panthères"],
      morale: "La bravoure et le respect des interdits préservent la communauté.",
      langue_origine: "Wê (Guéré/Wobé)",
      region: "Ouest (forêt Wê)",
      occasion: ["Veillées", "Initiations"],
      themes: ["Interdits", "Bravoure", "Surnaturel"],
      images: [],
      audio: [],
      video: []
    },
    sources: [
      "https://www.wobebli.net/contes/contes.htm",
      "https://horizon.documentation.ird.fr/exl-doc/pleins_textes/pleins_textes_2/memoires/05200.pdf"
    ]
  },

  {
    id: 7,
    groupe_ethnique: "Akan",
    sous_groupe: "Agni (Indénié/N’Dénian)",
    contes: {
      titre: "Anansi et la jarre de sagesse",
      conte: "L’araignée Anansi tente de cacher toute la sagesse dans une jarre; déjouée par son fils, il apprend que la sagesse se partage.",
      personnages: ["Anansi", "son fils", "villageois"],
      morale: "La sagesse est collective et doit circuler.",
      langue_origine: "Agni (akan)",
      region: "Est (Abengourou et alentours)",
      occasion: ["Veillées", "Écoles communautaires"],
      themes: ["Sagesse", "Partage", "Ruse"],
      images: [],
      audio: [],
      video: []
    },
    sources: [
      "https://fr.wikipedia.org/wiki/Agnis",
      "https://www.persee.fr/doc/ahess_0395-2649_1970_num_25_6_422310"
    ]
  },

  {
    id: 8,
    groupe_ethnique: "Akan",
    sous_groupe: "Abron (Brong, Gyaman)",
    contes: {
      titre: "Le tambour parleur de Gyaman",
      conte: "Un prince imprudent méconnaît les avertissements du tambour parleur; l’esprit protecteur du royaume l’oblige à réparer ses torts.",
      personnages: ["Prince de Gyaman", "tambour parleur", "anciens"],
      morale: "Mépriser la parole des anciens mène au désordre.",
      langue_origine: "Abron/Brong (akan)",
      region: "Nord-Est (Bondoukou, Tanda, Transua)",
      occasion: ["Fêtes royales", "Veillées"],
      themes: ["Pouvoir", "Tradition", "Avertissement"],
      images: [],
      audio: [],
      video: []
    },
    sources: [
      "https://fr.wikipedia.org/wiki/Abron_(peuple)",
      "https://journals.openedition.org/com/878"
    ]
  },

  {
    id: 9,
    groupe_ethnique: "Lagunaire (Akan)",
    sous_groupe: "Ébrié (Tchaman)",
    contes: {
      titre: "Otchogbi et les génies de la lagune",
      conte: "Sous la conduite d’Otchogbi, les Tchaman négocient avec les génies de la lagune pour s’installer en sécurité; les offrandes scellent l’alliance.",
      personnages: ["Otchogbi", "génies de la lagune", "anciens"],
      morale: "Vivre avec le milieu suppose pacte et respect des esprits.",
      langue_origine: "Atchan (ébrié)",
      region: "Sud (Lagune Ébrié, Abidjan)",
      occasion: ["Cérémonies lagunaires", "Veillées"],
      themes: ["Alliance avec la nature", "Migration", "Rituel"],
      images: [],
      audio: [],
      video: []
    },
    sources: [
      "https://www.africamuseum.be/docs/research/publications/rmca/online/tchaman.pdf",
      "https://fr.wikipedia.org/wiki/%C3%89bri%C3%A9s"
    ]
  },

  {
    id: 10,
    groupe_ethnique: "Kwa (Lagunaire)",
    sous_groupe: "Attié / Akyé",
    contes: {
      titre: "Anoumbé, ouverture du conte en pays Akyé",
      conte: "Le conte s’ouvre par « Mon mémé quité » — « aho ! »; histoire d’un chasseur qui apprend que la parole donnée aux esprits du bois ne se rompt pas.",
      personnages: ["Chasseur", "esprit du bois", "villageois"],
      morale: "Tenir sa parole protège la communauté.",
      langue_origine: "Attié (akyé)",
      region: "Sud-Est (Adzopé, Alépé)",
      occasion: ["Veillées de contes"],
      themes: ["Parole donnée", "Esprits de la forêt", "Rituel d’ouverture"],
      images: [],
      audio: [],
      video: []
    },
    sources: [
      "https://www.lemondedhugo.com/histoire-anoumbe-conte-en-pays-akye.php",
      "https://www.persee.fr/doc/cea_0008-0055_1966_num_6_21_3059"
    ]
  },

  {
    id: 11,
    groupe_ethnique: "Gur (Voltaïques)",
    sous_groupe: "Lobi",
    contes: {
      titre: "Le pacte des ancêtres lobi",
      conte: "Un chef rompt un interdit et attire la malchance; après sacrifices et réparation, l’ordre cosmique est restauré.",
      personnages: ["Chef lobi", "ancêtres", "devin"],
      morale: "Transgresser un interdit rompt l’ordre, la réparation est nécessaire.",
      langue_origine: "Lobi",
      region: "Nord-Est (frontière Burkina/Ghana)",
      occasion: ["Cérémonies de réparation", "Veillées"],
      themes: ["Interdits", "Ancêtres", "Réparation"],
      images: [],
      audio: [],
      video: []
    },
    sources: [
      "https://excerpts.numilog.com/books/9782905259417.pdf",
      "https://horizon.documentation.ird.fr/exl-doc/pleins_textes/pleins_textes_5/pt5/travaux_d/10005.pdf"
    ]
  },

  {
    id: 12,
    groupe_ethnique: "Gur (Voltaïques)",
    sous_groupe: "Koulango",
    contes: {
      titre: "Le serment du chasseur Koulango",
      conte: "Un chasseur promet de partager son gibier avec l’esprit de la brousse; en rompant le serment, il subit des malheurs et apprend l’humilité.",
      personnages: ["Chasseur", "esprit de la brousse", "anciens"],
      morale: "Les serments sacrés lient l’homme au monde invisible.",
      langue_origine: "Koulango",
      region: "Nord-Est (Bondoukou, Bouna)",
      occasion: ["Veillées", "Chasses rituelles"],
      themes: ["Serment", "Brousse", "Humilité"],
      images: [],
      audio: [],
      video: []
    },
    sources: [
      "https://www.persee.fr/doc/caoum_0373-5834_1962_num_15_57_2233"
    ]
  },

  {
    id: 13,
    groupe_ethnique: "Krou",
    sous_groupe: "Dida",
    contes: {
      titre: "L’esprit du marigot d’Abohiri",
      conte: "Une jeune fille brave l’interdit du marigot sacré; grâce à sa sincérité, l’esprit l’épargne et le village renforce les règles d’accès au marigot.",
      personnages: ["Jeune fille", "esprit du marigot", "anciens"],
      morale: "Les ressources naturelles sont sacrées et se respectent.",
      langue_origine: "Dida",
      region: "Centre-Sud (Divo, Lakota)",
      occasion: ["Veillées", "Rites liés à l’eau"],
      themes: ["Interdits écologiques", "Sacré", "Communauté"],
      images: [],
      audio: [],
      video: []
    },
    sources: [
      "https://www.persee.fr/doc/revss_1623-6572_2010_num_43_1_1291",
      "https://www.revues-ufhb-ci.org/fichiers/FICHIR_ARTICLE_2414.pdf"
    ]
  },

  {
    id: 14,
    groupe_ethnique: "Mande",
    sous_groupe: "Dioula/Malinké (Mandé du Nord)",
    contes: {
      titre: "Le griot et le chasseur",
      conte: "Un chasseur glorieux refuse de récompenser le griot; la communauté lui rappelle que la mémoire chantée donne sens à la bravoure.",
      personnages: ["Chasseur", "griot", "village"],
      morale: "La parole du griot pérennise les faits et mérite respect.",
      langue_origine: "Dioula/Malinké",
      region: "Nord (Katiola, Ferkessédougou)",
      occasion: ["Veillées", "Cérémonies de chasse"],
      themes: ["Mémoire", "Reconnaissance", "Honneur"],
      images: [],
      audio: [],
      video: []
    },
    sources: [
      "https://www.afjolih.org/wp-content/uploads/2023/10/10-Diabate-Nohoua.pdf"
    ]
  },

  {
    id: 15,
    groupe_ethnique: "Kwa (Lagunaire)",
    sous_groupe: "Abouré (Akan lagunaires, proche des Ébrié)",
    contes: {
      titre: "Le serpent de la lagune",
      conte: "Un serpent-esprit garde l’entrée de la lagune; un pêcheur qui le nourrit respecte l’interdit et reçoit l’abondance, tandis que les cupides échouent.",
      personnages: ["Pêcheur", "serpent-esprit", "villageois"],
      morale: "Respecter les génies de l’eau assure la prospérité.",
      langue_origine: "Abouré",
      region: "Sud-Est (Lagunes)",
      occasion: ["Rituels lagunaires", "Veillées"],
      themes: ["Eaux sacrées", "Interdits", "Prosperité"],
      images: [],
      audio: [],
      video: []
    },
    sources: [
      "https://www.persee.fr/doc/caoum_0373-5834_1991_num_44_176_3411"
    ]
  }
];
