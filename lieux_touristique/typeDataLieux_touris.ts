export interface LieuTouristique {
  nom: string;
  description: string;
  type_de_lieu: string;
  localisation: {
    region: string;
    ville_ou_village: string;
    coordonnees_gps: {
      latitude: number;
      longitude: number;
    };
  };
  photos: string[];
  culture_et_traditions: {
    rites_et_ceremonies: string;
    artisanat: string;
    gastronomie: string;
  };
  contact_et_informations: {
    contact_local: {
      nom: string;
      telephone: string;
    };
    horaires: string;
    tarifs: string;
  };
sources: string[];

}
export interface typeDataLieux_touris {
  id: number;
  origine: string;
  lieux_touristiques: LieuTouristique[];
}