
import { typeDataEvenement } from "./typeDataEvenement"
const dataEvenement:typeDataEvenement[] = [
    {
        id: 1,
        origine: "Peuple Yacouba",
        evenements: [
            {
                nom_de_evenement: "Fête des Masques",
                description: "Célébration annuelle pour honorer les esprits de la forêt et les ancêtres.",
                type_evenement: "Festival spirituel",
                periodicite: "Annuel",
                date_ou_periode: "Novembre-Février",
                localisation: {
                    region: "Région du Tonkpi",
                    ville_ou_village: "Man"
                }
            }
        ]
    },
    {
        id: 2,
        origine: "Peuple Baoulé",
        evenements: [
            {
                nom_de_evenement: "Fête de l'Igname",
                description: "Célébration de la première récolte d’ignames.",
                type_evenement: "Festival agricole",
                periodicite: "Annuel",
                date_ou_periode: "Août-Septembre",
                localisation: {
                    region: "Région du Gbêkê",
                    ville_ou_village: "Bouaké"
                }
            }
        ]
    },
    {
        id: 3,
        origine: "Peuple Sénoufo",
        evenements: [
            {
                nom_de_evenement: "Poro Initiatique",
                description: "Cérémonie initiatique pour marquer le passage des jeunes à l’âge adulte.",
                type_evenement: "Rite initiatique",
                periodicite: "Annuel",
                date_ou_periode: "Janvier-Avril",
                localisation: {
                    region: "Région du Poro",
                    ville_ou_village: "Korhogo"
                }
            }
        ]
    },
    {
        id: 4,
        origine: "Peuple Agni",
        evenements: [
            {
                nom_de_evenement: "Fête de l'Igname",
                description: "Célébration de la première récolte d’ignames.",
                type_evenement: "Festival agricole",
                periodicite: "Annuel",
                date_ou_periode: "Août-Septembre",
                localisation: {
                    region: "Région de l’Indénié-Djuablin",
                    ville_ou_village: "Abengourou"
                }
            }
        ]
    },
    {
        id: 5,
        origine: "Peuple Attié",
        evenements: [
            {
                nom_de_evenement: "Fête de l'Attié",
                description: "Célébration locale traditionnelle avec danses et offrandes.",
                type_evenement: "Festival culturel",
                periodicite: "Annuel",
                date_ou_periode: "Mai-Juin",
                localisation: {
                    region: "Lagunes",
                    ville_ou_village: "Azaguié"
                }
            }
        ]
    },
    {
        id: 6,
        origine: "Peuple Abé",
        evenements: [
            {
                nom_de_evenement: "Fête du Bois Sacré",
                description: "Cérémonie rituelle dans le bois sacré du village.",
                type_evenement: "Rituel religieux",
                periodicite: "Annuel",
                date_ou_periode: "Mars",
                localisation: {
                    region: "Lagunes",
                    ville_ou_village: "Adzopé"
                }
            }
        ]
    },
    {
        id: 7,
        origine: "Peuple Dida",
        evenements: [
            {
                nom_de_evenement: "Fête des Ancêtres Dida",
                description: "Rituels et danses pour honorer les ancêtres.",
                type_evenement: "Rituel traditionnel",
                periodicite: "Annuel",
                date_ou_periode: "Avril-Mai",
                localisation: {
                    region: "Gôh-Djiboua",
                    ville_ou_village: "Divo"
                }
            }
        ]
    },
    {
        id: 8,
        origine: "Peuple Godié",
        evenements: [
            {
                nom_de_evenement: "Festival des Masques Godié",
                description: "Danses et cérémonies rituelles avec les masques traditionnels.",
                type_evenement: "Festival culturel",
                periodicite: "Annuel",
                date_ou_periode: "Décembre-Janvier",
                localisation: {
                    region: "San Pedro",
                    ville_ou_village: "Godié"
                }
            }
        ]
    },
    {
        id: 9,
        origine: "Peuple Bété",
        evenements: [
            {
                nom_de_evenement: "Fête du Goli",
                description: "Fête des masques Bété avec danses et chants.",
                type_evenement: "Festival spirituel",
                periodicite: "Annuel",
                date_ou_periode: "Février-Mars",
                localisation: {
                    region: "Cavally",
                    ville_ou_village: "Guiglo"
                }
            }
        ]
    },
    {
        id: 10,
        origine: "Peuple Krobou",
        evenements: [
            {
                nom_de_evenement: "Fête de la Mangue",
                description: "Célébration de la récolte des mangues avec danses et chants.",
                type_evenement: "Festival agricole",
                periodicite: "Annuel",
                date_ou_periode: "Juin-Juillet",
                localisation: {
                    region: "La Mé",
                    ville_ou_village: "Yakassé-Attobrou"
                }
            }
        ]
    },
    {
        id: 11,
        origine: "Peuple Ebrié",
        evenements: [
            {
                nom_de_evenement: "Fête de la Mer",
                description: "Cérémonie en hommage à la mer et aux ancêtres.",
                type_evenement: "Rituel traditionnel",
                periodicite: "Annuel",
                date_ou_periode: "Août",
                localisation: {
                    region: "Lagunes",
                    ville_ou_village: "Abidjan"
                }
            }
        ]
    },
    {
        id: 12,
        origine: "Peuple Avikam",
        evenements: [
            {
                nom_de_evenement: "Festival Avikam",
                description: "Célébration culturelle avec danses et artisanat.",
                type_evenement: "Festival culturel",
                periodicite: "Annuel",
                date_ou_periode: "Septembre",
                localisation: {
                    region: "Lagunes",
                    ville_ou_village: "Grand-Lahou"
                }
            }
        ]
    },
    {
        id: 13,
        origine: "Peuple Akyé",
        evenements: [
            {
                nom_de_evenement: "Fête du Tambour",
                description: "Célébration des rythmes et danses traditionnelles Akyé.",
                type_evenement: "Festival musical",
                periodicite: "Annuel",
                date_ou_periode: "Octobre",
                localisation: {
                    region: "La Mé",
                    ville_ou_village: "Adzopé"
                }
            }
        ]
    },
    {
        id: 14,
        origine: "Peuple Lobi",
        evenements: [
            {
                nom_de_evenement: "Festival Lobi",
                description: "Célébration des traditions et artisanat Lobi.",
                type_evenement: "Festival culturel",
                periodicite: "Annuel",
                date_ou_periode: "Novembre",
                localisation: {
                    region: "Tchologo",
                    ville_ou_village: "Ferkessédougou"
                }
            }
        ]
    },
    {
        id: 15,
        origine: "Peuple Malinké",
        evenements: [
            {
                nom_de_evenement: "Fête du Roi Malinké",
                description: "Hommage au roi et célébration de la culture Malinké.",
                type_evenement: "Festival historique",
                periodicite: "Annuel",
                date_ou_periode: "Décembre",
                localisation: {
                    region: "Bafing",
                    ville_ou_village: "Touba"
                }
            }
        ]
    }
]