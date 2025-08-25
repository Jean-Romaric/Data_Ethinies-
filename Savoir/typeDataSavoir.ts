export interface DomaineDeSavoir {
  domaine: string;
  savoirs_specifiques: string[];
  description: string;
  transmetteur: string;
  matieres_premieres: string[];
}

export interface ContexteCulturel {
  rites_et_ceremonies: string;
  langue: string;
  valeur_symbolique: string;
}

export interface Localisation {
  region: string;
  ville_ou_village: string;
}

export interface TypeDataSavoir {
  id: number;
  origine: string;
  domaine_de_savoirs: DomaineDeSavoir[];
  contexte_culturel: ContexteCulturel;
  localisation: Localisation;
  sources: string[];
}
