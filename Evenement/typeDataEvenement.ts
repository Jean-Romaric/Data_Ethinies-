export interface CoordonneesGPS {
    latitude?: number;
    longitude?: number;
}

export interface Localisation {
    region: string;
    ville_ou_village: string;
    coordonnees_gps?: CoordonneesGPS;
}

export interface RitesEtSymbolisme {
    rites_associes?: string[];
    objets_rituels?: string[];
    symbolisme?: string;
}

export interface InformationsPratiques {
    contacts?: string;
    activites?: string;
    horaires?: string;
    tarifs?: string;
}

export interface Evenement {
    nom_de_evenement: string;
    description: string;
    type_evenement: string;
    periodicite: string;
    date_ou_periode: string;
    localisation: Localisation;
    rites_et_symbolisme?: RitesEtSymbolisme;
    photos_ou_media?: string[];
    informations_pratiques?: InformationsPratiques;
}

export interface typeDataEvenement {
    id: number;
    origine: string;
    evenements: Evenement[];
}
