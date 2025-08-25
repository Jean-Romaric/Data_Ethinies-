export interface ArtItem {
  nom: string;
  description: string;
  materiaux?: string[]; // optionnel, pas pour tous
  occasion?: string[];
  region?: string;
  signification?: string;
  images?: string[] | string; // parfois une seule image, parfois plusieurs
  image?: string; // pour arts_oratoires (mon modèle avait "image" au singulier)
}

export interface Arts {
  masques_sculptures: ArtItem[];
  danses: ArtItem[];
  musique_instruments: ArtItem[];
  tissage_textile: ArtItem[];
  poterie_artisanat: ArtItem[];
  orfèvrerie_bijoux: ArtItem[];
  peinture_corporelle: ArtItem[];
  architecture: ArtItem[];
  arts_oratoires: ArtItem[];
  arts_culinaires: ArtItem[];
}

export interface  typeDataArt {
  id: number;
  groupe_ethnique: string;
  sous_groupe: string;
  arts: Arts;
  sources: string[];
}
