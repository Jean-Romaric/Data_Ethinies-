export interface ConteItem {
  titre: string;               // Titre du conte
  conte: string;               // Texte ou résumé du conte
  personnages: string[];       // Liste des personnages
  morale: string;              // Enseignement du conte
  langue_origine: string;      // Langue du conte
  region: string;              // Région géographique
  occasion: string[];          // Occasions ou contextes de narration
  themes: string[];            // Thèmes abordés
  images?: string[];           // URLs images du conte
  audio?: string[];            // URLs fichiers audio
  video?: string[];            // URLs fichiers vidéo
}

export interface typeDataConte {
  id: number;                  // Identifiant unique
  groupe_ethnique: string;     // Groupe ethnique principal
  sous_groupe: string;         // Sous-groupe
  contes: ConteItem;           // Détails du conte
  sources: string[];           // Sources / références fiables
}


