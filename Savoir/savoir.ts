
import { TypeDataSavoir } from "./typeDataSavoir";

const dataSavoir: TypeDataSavoir[] = [
  {
    id: 1,
    origine: "Sénoufo",
    domaine_de_savoirs: [
      {
        domaine: "Agriculture",
        savoirs_specifiques: [
          "Savoirs agronomiques et systèmes de culture sur brûlis",
          "Utilisation des plantes sauvages comme indicateurs de fertilité des sols",
          "Techniques de conservation des semences locales"
        ],
        description: "Maîtrise traditionnelle des cultures de savane (mil, sorgho, riz); pratiques de rotation et de jachère, observation des signes naturels pour programmer les semis.",
        transmetteur: "Chefs de terre, anciens et sociétés d'initiation (Poro)",
        matieres_premieres: [
          "Semences de mil",
          "Sorgho",
          "Riz",
          "Terre"
        ]
      },
      {
        domaine: "Artisanat",
        savoirs_specifiques: [
          "Tissage et teinture à l'indigo",
          "Sculpture sur bois (masques Kpeliyee)",
          "Poterie et vannerie"
        ],
        description: "Richesse des arts rituels (masques, statues) et des techniques textiles (tissage de toiles de Korhogo, teinture indigo).",
        transmetteur: "Artisans, sculpteurs, maîtres-tisserands",
        matieres_premieres: [
          "Bois",
          "Argile",
          "Fibres naturelles",
          "Indigo"
        ]
      }
    ],
    contexte_culturel: {
      rites_et_ceremonies: "Le Poro joue un rôle central dans la transmission des savoirs et la régulation sociale.",
      langue: "Sénoufo (parlers régionaux)",
      valeur_symbolique: "Agriculture et artisanat liés aux ancêtres et à l'identité communautaire."
    },
    localisation: {
      region: "Région du Poro",
      ville_ou_village: "Korhogo"
    },
    sources: [
      "https://ivoiretravel.ci/location/korhogo",
      "https://baab.ci/articles_baab/korhogo-et-les-traditions-senoufos/"
    ]
  },
  {
    id: 2,
    origine: "Bété",
    domaine_de_savoirs: [
      {
        domaine: "Agriculture",
        savoirs_specifiques: [
          "Cultures de forêt (manioc, igname)",
          "Techniques sur brûlis adaptées à la forêt humide",
          "Connaissances locales des plantes alimentaires et médicinales"
        ],
        description: "Adaptation des systèmes agricoles à la forêt dense: tubercules (manioc, igname), cultures associées et gestion locale des ressources forestières.",
        transmetteur: "Anciens et chefs de village",
        matieres_premieres: [
          "Manioc",
          "Ignames",
          "Plantains",
          "Plantes médicinales"
        ]
      },
      {
        domaine: "Artisanat",
        savoirs_specifiques: [
          "Sculpture et masques rituels",
          "Tissage et vannerie",
          "Techniques picturales (héritage Bruly Bouabré)"
        ],
        description: "Tradition sculpturale et iconographique forte, avec masques et statuettes utilisés dans les rites et la régulation sociale.",
        transmetteur: "Sculpteurs et artisans locaux",
        matieres_premieres: [
          "Bois",
          "Fibres",
          "Pigments naturels"
        ]
      }
    ],
    contexte_culturel: {
      rites_et_ceremonies: "Cérémonies villageoises, danses et usages rituels des masques.",
      langue: "Bété",
      valeur_symbolique: "Savoirs liés à la forêt et aux ancêtres, identité régionale (Gôh, Haut-Sassandra)."
    },
    localisation: {
      region: "Gôh / Haut-Sassandra",
      ville_ou_village: "Daloa"
    },
    sources: [
      "https://www.mairieguiberoua.ci/detail-culture-et-tourisme/90/les-danses-du-pays-bete",
      "https://abidjanplanet.ci/lecriture-bete-un-heritage-culturel-a-lere-du-numerique/"
    ]
  },
  {
    id: 3,
    origine: "Agni",
    domaine_de_savoirs: [
      {
        domaine: "Agriculture",
        savoirs_specifiques: [
          "Culture de l'igname et du riz (rizières locales)",
          "Techniques de conservation des tubercules",
          "Usage des plantes médicinales en agriculture"
        ],
        description: "Savoirs liés à la culture de l'igname (fête des ignames), riz et aux pratiques agroécologiques locales.",
        transmetteur: "Chefs de terre et anciens",
        matieres_premieres: [
          "Ignames",
          "Riz",
          "Plantes médicinales"
        ]
      },
      {
        "domaine": "Artisanat",
        "savoirs_specifiques": [
          "Tissage et textiles rituels",
          "Orfèvrerie et parures royales",
          "Sculpture rituelle"
        ],
        description: "Artisanat lié à la chefferie (insignes, parures) et aux cérémonies royales.",
        transmetteur: "Artisans de cour et tisserands",
        matieres_premieres: [
          "Textiles",
          "Or",
          "Bois"
        ]
      }
    ],
    contexte_culturel: {
      rites_et_ceremonies: "Fête des ignames (Indénié) et cérémonies royales à Abengourou.",
      langue: "Agni",
      valeur_symbolique: "Rôle central des chefferies et du rituel agricole."
    },
    localisation: {
      region: "Indénié-Djuablin",
      ville_ou_village: "Abengourou"
    },
    sources: [
      "https://lgi.ci/fete-des-ignames-abengourou-2/",
      "https://www.presidence.ci/en/our-heritage/comoe-autonomous-district/"
    ]
  },
  {
    id: 4,
    origine: "Malinké",
    domaine_de_savoirs: [
      {
        domaine: "Agriculture & élevage",
        savoirs_specifiques: [
          "Cultures de savane (mil, sorgho), riz pluvial",
          "Élevage traditionnel",
          "Connaissance des plantes médicinales"
        ],
        description: "Systèmes agraires de savane, pratiques d'élevage et savoirs vétérinaires traditionnels.",
        transmetteur: "Anciens, éleveurs, griots",
        matieres_premieres: [
          "Mil",
          "Sorgho",
          "Bétail",
          "Plantes médicinales"
        ]
      },
      {
        "domaine": "Oralité et musique",
        "savoirs_specifiques": [
          "Griottes et transmission orale (épopées)",
          "Lutherie (kora, balafon)",
          "Rituels islamiques locaux"
        ],
        description: "Importance des griots et de la musique (kora, balafon) pour la transmission des savoirs et de l'histoire.",
        transmetteur: "Griots et maîtres musiciens",
        matieres_premieres: [
          "Cordes",
          "Bois",
          "Peaux"
        ]
      }
    ],
    contexte_culturel: {
      rites_et_ceremonies: "Fêtes islamiques locales et cérémonies d'initiation; socle de la mémoire collective.",
      langue: "Malinké",
      valeur_symbolique: "Rôle central des griots et des arts oraux."
    },
    localisation: {
      region: "Tchologo / Kabadougou",
      ville_ou_village: "Kong / Kouto region"
    },
    sources: [
      "https://whc.unesco.org/fr/list/1648",
      "https://presidence.ci/en/our-heritage/comoe-autonomous-district/"
    ]
  },
  {
    id: 5,
    origine: "Baoulé",
    domaine_de_savoirs: [
      {
        domaine: "Agriculture",
        savoirs_specifiques: [
          "Culture de l'igname, du maïs et du manioc",
          "Techniques de rotation et de conservation",
          "Savoirs sur les forêts et ressources locales"
        ],
        description: "Savoirs agricoles centrés sur l'igname (fêtes de la récolte), production vivrière et agroforesterie locale.",
        transmetteur: "Chefs, anciens et agriculteurs expérimentés",
        matieres_premieres: [
          "Ignames",
          "Maïs",
          "Manioc"
        ]
      },
      {
        "domaine": "Artisanat",
        "savoirs_specifiques": [
          "Tissage (pagne Tanny)",
          "Sculpture de masques (Goli)",
          "Orfèvrerie (poids à or)"
        ],
        description: "Riches savoirs textiles et orfèvres, symboles d'identité baoulé et utilisés lors des cérémonies.",
        transmetteur: "Maîtres tisserands et artisans",
        matieres_premieres: [
          "Coton",
          "Fibres",
          "Métal"
        ]
      }
    ],
    contexte_culturel: {
      rites_et_ceremonies: "Fêtes d'igname, cérémonies royales et culte des ancêtres.",
      langue: "Baoulé (Akan)",
      valeur_symbolique: "Hospitalité (Akwaba) et prestige des chefferies."
    },
    localisation: {
      region: "Centre / Gbêkê",
      ville_ou_village: "Yamoussoukro / Bouaké"
    },
    sources: [
      "https://www.districtyakro.ci/accueil/districtyamousskouro/fr/1",
      "https://www.aip.ci/94568/cote-divoire-aip-accueil-du-roi-des-baoules-par-les-chefs-akoues-a-yamoussoukro/"
    ]
  },
  {
    id: 6,
    origine: "Attié",
    domaine_de_savoirs: [
      {
        domaine: "Agriculture",
        savoirs_specifiques: [
          "Cultures de rente et vivrières (cacao, manioc, banane)",
          "Techniques de transformation des tubercules",
          "Connaissance des plantes médicinales locales"
        ],
        description: "Savoirs agricoles des lagunes et de la zone forestière-sud, avec techniques locales de transformation et conservation.",
        transmetteur: "Anciens agriculteurs et guérisseurs",
        matieres_premieres: [
          "Cacao",
          "Manioc",
          "Plantain"
        ]
      },
      {
        domaine: "Gastronomie & artisanat",
        savoirs_specifiques: [
          "Recettes locales (plats à base d'attiéké)",
          "Poterie et vannerie",
          "Art du tissage local"
        ],
        description: "Savoirs culinaires et artisanaux adaptés aux ressources lagunaires et forestières.",
        transmetteur: "Mères et artisans locaux",
        matieres_premieres: [
          "Manioc",
          "Céréales",
          "Fibres"
        ]
      }
    ],
    contexte_culturel: {
      rites_et_ceremonies: "Fêtes locales, initiations et rites liés à la pêche et la lagune.",
      langue: "Attié (Akyé)",
      valeur_symbolique: "Liens forts entre pratiques alimentaires, rituels et identité."
    },
    localisation: {
      region: "Lagunes / Sud-Est",
      ville_ou_village: "Adzopé / Anyama"
    },
    sources: [
      "https://tourisme.gouv.ci/uploads/magazines/sublime-ci-mars-2025-b-compressed-6852ad94a69d9206728055.pdf",
      "https://fr.wikipedia.org/wiki/Atti%C3%A9_%28peuple%29"
    ]
  },
  {
    id: 7,
    origine: "Abron",
    domaine_de_savoirs: [
      {
        domaine: "Agriculture & tissage",
        savoirs_specifiques: [
          "Tissage traditionnel (Bondoukou, Kanguélé)",
          "Agriculture de savane et fruitiers locaux",
          "Conservation locale des semences"
        ],
        description: "Les Abron ont une tradition de tissage reconnue à Bondoukou; savoirs agricoles adaptés aux collines et plaines locales.",
        transmetteur: "Tisserands et anciens",
        matieres_premieres: [
          "Coton",
          "Fibres",
          "Semences locales"
        ]
      },
      {
        domaine: "Oralité et histoire",
        "savoirs_specifiques": [
          "Récits historiques du royaume de Bondoukou",
          "Pratiques rituelles et royales",
          "Musique et chants traditionnels"
        ],
        description: "Transmission des récits du royaume et des institutions royales; pratiques cérémonielles locales.",
        transmetteur: "Chefs, griots et anciens",
        matieres_premieres: [
          "Instruments",
          "Textiles"
        ]
      }
    ],
    contexte_culturel: {
      rites_et_ceremonies: "Cérémonies royales à Bondoukou et fêtes historiques.",
      langue: "Abron",
      valeur_symbolique: "Héritage historique du royaume de Bondoukou."
    },
    localisation: {
      region: "Gontougo",
      ville_ou_village: "Bondoukou"
    },
    sources: [
      "https://rezoivoire.net/ivoire/patrimoine/2824/le-peuple-abron-de-bondoukou.html",
      "https://discover-ivorycoast.com/la-region-du-gontougo/"
    ]
  },
  {
    id: 8,
    origine: "Adjoukrou (Adioukrou)",
    domaine_de_savoirs: [
      {
        domaine: "Savoirs maritimes et lagunaires",
        savoirs_specifiques: [
          "Pêche traditionnelle et constructions de pirogues",
          "Connaissances des marées et routes lagunaires",
          "Techniques de salaison et fumage"
        ],
        description: "Savoirs liés à la pêche, aux mangroves et à la vie lagunaire; techniques artisanales de pêche et de transformation des produits de la mer.",
        transmetteur: "Pêcheurs et anciens",
        matieres_premieres: [
          "Poissons",
          "Sel",
          "Bois de pirogue"
        ]
      },
      {
        "domaine": "Artisanat",
        "savoirs_specifiques": [
          "Vannerie et tressage",
          "Sculpture et parures lagunaires",
          "Rituels de protection des pirogues"
        ],
        description: "Pratiques artisanales en lien avec la lagune et le littoral, souvent intégrées aux rituels et fêtes locales.",
        transmetteur: "Artisans et anciens",
        matieres_premieres: [
          "Fibres",
          "Bois",
          "Coquillages"
        ]
      }
    ],
    contexte_culturel: {
      rites_et_ceremonies: "Rituels de bénédiction des pirogues et fêtes de pêche.",
      langue: "Adioukrou (Kru-Akan mix)",
      valeur_symbolique: "Respect des eaux et des esprits lagunaires."
    },
    localisation: {
      region: "Lagunes",
      ville_ou_village: "Dabou / Grand-Bassam area"
    },
    sources: [
      "https://fr.wikipedia.org/wiki/Adioukrou_%28peuple%29",
      "https://tourismecotedivoire.ci/le-centre-lart-de-vivre-en-couleur/"
    ]
  },
  {
    id: 9,
    origine: "Aké (Akye)",
    domaine_de_savoirs: [
      {
        domaine: "Agriculture",
        savoirs_specifiques: [
          "Cultures vivrières (igname, manioc, plantain)",
          "Gestion des plantations et agroforesterie",
          "Transmissions de savoir-faire sur l'utilisation des sols forestiers"
        ],
        description: "Pratiques agricoles intégrées à l'économie de plantation et aux cultures vivrières locales.",
        transmetteur: "Anciens et chefs de village",
        matieres_premieres: [
          "Ignames",
          "Manioc",
          "Plantain"
        ]
      },
      {
        domaine: "Artisanat",
        savoirs_specifiques: [
          "Tissage et ornementation textile",
          "Sculpture et parures",
          "Céramique domestique"
        ],
        description: "Savoirs artisanaux liés aux pratiques Akan de la zone forestière sud-est.",
        transmetteur: "Artisans locaux",
        matieres_premieres: [
          "Fibres",
          "Bois",
          "Argile"
        ]
      }
    ],
    contexte_culturel: {
      rites_et_ceremonies: "Fêtes agricoles et initiations locales.",
      langue: "Akyé/Aké (Akan subgroup)",
      valeur_symbolique: "Activités agricoles et artisanales au coeur de l'identité villageoise."
    },
    localisation: {
      region: "Sud-Est / Lagunes",
      ville_ou_village: "Anyama / Adzopé zones"
    },
    sources: [
      "https://www.persee.fr/doc/caoum_0373-5834_1974_num_27_108_2715",
      "https://voyage.ci/culture-et-tradition-de-cote-divoire/"
    ]
  },
  {
    id: 10,
    origine: "Alladian (Alladianes)",
    domaine_de_savoirs: [
      {
        domaine: "Savoirs lagunaires",
        savoirs_specifiques: [
          "Techniques de pêcherie et navigation lagunaire",
          "Conservation des produits de la mer",
          "Connaissance des mangroves et des récifs"
        ],
        description: "Pratiques et savoirs tirés de la vie lagunaire, pêche et commerce côtier.",
        transmetteur: "Pêcheurs et anciens",
        matieres_premieres: [
          "Poisson",
          "Coquillages",
          "Bois de pirogue"
        ]
      },
      {
        domaine: "Artisanat",
        savoirs_specifiques: [
          "Vannerie, tressage et fabrication d'objets marins",
          "Sculpture légère et parures",
          "Cuisine et techniques de conservation"
        ],
        description: "Artisanat de rivage associé aux cérémonies et rites de la lagune.",
        transmetteur: "Artisans locaux",
        matieres_premieres: [
          "Fibres",
          "Bois",
          "Coquillages"
        ]
      }
    ],
    contexte_culturel: {
      rites_et_ceremonies: "Cérémonies de bénédiction des pirogues et fêtes de la lagune.",
      langue: "Littoral (variantes locales)",
      valeur_symbolique: "Lien fort entre la vie quotidienne et les esprits de l'eau."
    },
    localisation: {
      region: "Sud / Lagune",
      ville_ou_village: "Grand-Lahou / Grand-Bassam area"
    },
    sources: [
      "https://oipr.ci/nos-parcs",
      "https://tourismecotedivoire.ci/le-centre-lart-de-vivre-en-couleur/"
    ]
  },
  {
    id: 11,
    origine: "Akyé",
    domaine_de_savoirs: [
      {
        domaine: "Agriculture",
        savoirs_specifiques: [
          "Cultures vivrières locales (igname, manioc)",
          "Gestion des parcelles et semis",
          "Utilisation des plantes médicinales locales"
        ],
        description: "Savoirs agricoles du Sud-Est, avec techniques de culture adaptées aux sols forestiers et humides.",
        transmetteur: "Anciens agriculteurs",
        matieres_premieres: [
          "Ignames",
          "Manioc",
          "Plantes médicinales"
        ]
      },
      {
        domaine: "Artisanat",
        savoirs_specifiques: [
          "Tissage et ornementation textile",
          "Coutellerie et outillage traditionnel",
          "Sculpture rituelle"
        ],
        description: "Pratiques artisanales liées à l'identité Akan lagunaire.",
        transmetteur: "Artisans et sculpteurs",
        matieres_premieres: [
          "Bois",
          "Fibres",
          "Métal"
        ]
      }
    ],
    contexte_culturel: {
      rites_et_ceremonies: "Fêtes agricoles et cultes d'ancêtres.",
      langue: "Akyé (Attié subgroup)",
      valeur_symbolique: "Transmission par la famille étendue et les autorités coutumières."
    },
    localisation: {
      region: "Sud-Est / Lagunes",
      ville_ou_village: "Anyama / Adzopé area"
    },
    sources: [
      "https://fr.wikipedia.org/wiki/Atti%C3%A9_%28peuple%29",
      "https://voyage.ci/culture-et-tradition-de-cote-divoire/"
    ]
  },
  {
    id: 12,
    origine: "Anufo",
    domaine_de_savoirs: [
      {
        domaine: "Agriculture",
        savoirs_specifiques: [
          "Techniques de riziculture pluviale",
          "Cultures de savane (mil, sorgho)",
          "Stockage traditionnel des semences"
        ],
        description: "Savoirs agricoles du nord et nord-est, adaptés à la zone de savane.",
        transmetteur: "Anciens et chefs de terre",
        matieres_premieres: [
          "Mil",
          "Sorgho",
          "Riz"
        ]
      },
      {
        domaine: "Artisanat",
        savoirs_specifiques: [
          "Tissage et vannerie",
          "Fabrication d'instruments de musique (trompes)",
          "Sculpture rituelle"
        ],
        description: "Pratiques artisanales et musicales liées aux sociétés de la savane.",
        transmetteur: "Artisans et musiciens locaux",
        matieres_premieres: [
          "Fibres",
          "Bois",
          "Cordes"
        ]
      }
    ],
    contexte_culturel: {
      rites_et_ceremonies: "Rituels agricoles et sociétés initiatiques locales.",
      langue: "Anufo (variantes Mandé)",
      valeur_symbolique: "Lien fort entre musique, mémoire et pratiques agricoles."
    },
    localisation: {
      region: "Nord / Savane",
      ville_ou_village: "Nord-Est areas"
    },
    sources: [
      "https://www.ultimesgriots.com",
      "https://ivoiretravel.ci/location/korhogo"
    ]
  },
  {
    id: 13,
    origine: "Avikam",
    domaine_de_savoirs: [
      {
        domaine: "Vie lagunaire et pêche",
        savoirs_specifiques: [
          "Techniques de pêche en lagune",
          "Construction et entretien de pirogues",
          "Connaissance des zones de mangrove"
        ],
        description: "Savoirs directement liés à la pêche, aux marais et à la gestion des mangroves autour de Grand-Lahou et Assinie.",
        transmetteur: "Pêcheurs et anciens",
        matieres_premieres: [
          "Poissons",
          "Bois",
          "Cordes"
        ]
      },
      {
        domaine: "Artisanat",
        savoirs_specifiques: [
          "Vannerie de pirogues et nasses",
          "Fabrication d'objets rituels",
          "Transformation et salaison du poisson"
        ],
        description: "Habiletés artisanales liées aux ressources lagunaires et aux activités maritimes.",
        transmetteur: "Artisans locaux",
        matieres_premieres: [
          "Fibres",
          "Bois",
          "Coquilles"
        ]
      }
    ],
    contexte_culturel: {
      rites_et_ceremonies: "Rituels de bénédiction pour la pêche et les sorties en mer.",
      langue: "Avikam (lagunaire)",
      valeur_symbolique: "Respect des eaux et pratiques communautaires de partage."
    },
    localisation: {
      region: "Sud / Grands-Ponts",
      ville_ou_village: "Grand-Lahou / Assinie area"
    },
    sources: [
      "https://oipr.ci/nos-parcs",
      "https://tourismecotedivoire.ci/le-centre-lart-de-vivre-en-couleur/"
    ]
  },
  {
    id: 14,
    origine: "Ébrié",
    domaine_de_savoirs: [
      {
        domaine: "Pêche et gestion lagunaire",
        savoirs_specifiques: [
          "Techniques de pêche en estuaire et lagune",
          "Construction de pirogues et artisanat nautique",
          "Connaissance des courants et bancs de sable"
        ],
        description: "Compétences liées à la vie lagunaire d'Abidjan et des villages environnants (pêche, navigation, ressources halieutiques).",
        transmetteur: "Pêcheurs et anciens",
        matieres_premieres: [
          "Poisson",
          "Bois",
          "Fibres"
        ]
      },
      {
        domaine: "Artisanat & musique",
        savoirs_specifiques: [
          "Tambours et percussions lagunaires",
          "Sculpture de statuettes et objets rituels",
          "Cuisine de la lagune (attiéké, plats de poisson)"
        ],
        description: "Savoirs artistiques et culinaires ancrés dans la vie urbaine/lagunaire d'Abidjan.",
        transmetteur: "Artisans, musiciens et cuisiniers locaux",
        matieres_premieres: [
          "Bois",
          "Peaux",
          "Aliments de la lagune"
        ]
      }
    ],
    contexte_culturel: {
      rites_et_ceremonies: "Célébrations liées à la lagune et aux cycles de pêche; rituels de protection.",
      langue: "Ébrié",
      valeur_symbolique: "Identité lagunaire et lien à la ville d'Abidjan."
    },
    localisation: {
      region: "District d'Abidjan",
      ville_ou_village: "Abidjan (lagunes)"
    },
    sources: [
      "https://mintour.sublime-ci.com/ci/114-le-plan-d-eau-lagunaire",
      "https://museedescivilisations.com/les-actualites/item/329-le-musee-des-civilisations-d-abidjan-veut-vibrer-au-son-de-son-tambour-ebrie.html"
    ]
  },
  {
    id: 15,
    origine: "Gouro",
    domaine_de_savoirs: [
      {
        domaine: "Danse et masques (Zaouli)",
        savoirs_specifiques: [
          "Fabrication du masque Zaouli et costumes associés",
          "Technique et chorégraphie de la danse Zaouli",
          "Rituels associés et fonctions communautaires du masque"
        ],
        description: "Le Zaouli est un masque-danse emblématique du Gouro: sculpture, tissage, musique et danse se combinent pour renforcer l'identité et la cohésion sociale.",
        transmetteur: "Sculpteurs, tisserands, danseurs et chefs coutumiers",
        matieres_premieres: [
          "Bois",
          "Textiles",
          "Cordes",
          "Peaux"
        ]
     },
      {
        domaine: "Artisanat & musique",
        savoirs_specifiques: [
          "Tissage et pagnes rituels",
          "Sculpture sur bois et statuaire",
          "Musique rituelle (tambours et percussions)"
        ],
        description: "Traditions artistiques riches (masques, tambours, tissage) jouant un rôle central dans les fêtes et initiations.",
        transmetteur: "Artisans et maîtres d'arts",
        matieres_premieres: [
          "Bois",
          "Fibres",
          "Peaux"
        ]
      }
    ],
    contexte_culturel: {
      rites_et_ceremonies: "Zaouli et autres danses masquées, fêtes villageoises et cérémonies initiatiques.",
      langue: "Gouro",
      valeur_symbolique: "Masques et danses comme vecteurs d'identité et de mémoire collective."
    },
    localisation: {
      region: "Centre-Ouest",
      ville_ou_village: "Bouaflé / Zuénoula areas"
    },
    sources: [
      "https://ich.unesco.org/fr/RL/le-zaouli-musique-et-danse-populaires-des-communautes-gouro-de-cote-d-ivoire-01255",
      "https://museedescivilisations.com/collections/collection-par-categorie/category/12-les-masques.html"
    ]
  }
]