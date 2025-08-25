export interface Fete {
  nom: string;                  // Nom de la fête
  type: string;                 // Type de la fête (rituel, agricole, commémoration, danse…)
  description: string;          // Description détaillée
  periode: string;              // Moment ou période de l'année
  lieu: string;                 // Localisation géographique
  duree: string;                // Durée de la fête
  participants: string[];       // Participants à la fête
  activites: string[];          // Activités réalisées
  costumes_masques: string[];   // Masques et costumes utilisés
  signification: string;        // Sens ou symbolique
  images?: string[];            // URLs des images
  sources: string[];            // Sources fiables
}

export interface TypeDataFestivite {
  id: number;                   // Identifiant unique
  groupe_ethnique: string;      // Groupe ethnique principal
  sous_groupe: string;          // Sous-groupe
  fete: Fete;                   // Informations sur la fête
}
