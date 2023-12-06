import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerNotifications = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notifications, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly titre: string;
  readonly corps?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNotifications = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notifications, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly titre: string;
  readonly corps?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Notifications = LazyLoading extends LazyLoadingDisabled ? EagerNotifications : LazyNotifications

export declare const Notifications: (new (init: ModelInit<Notifications>) => Notifications) & {
  copyOf(source: Notifications, mutator: (draft: MutableModel<Notifications>) => MutableModel<Notifications> | void): Notifications;
}

type EagerCadeauxDonnes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CadeauxDonnes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly suivi: number;
  readonly suiviDate: string;
  readonly cadeauxID: string;
  readonly clientsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCadeauxDonnes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CadeauxDonnes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly suivi: number;
  readonly suiviDate: string;
  readonly cadeauxID: string;
  readonly clientsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CadeauxDonnes = LazyLoading extends LazyLoadingDisabled ? EagerCadeauxDonnes : LazyCadeauxDonnes

export declare const CadeauxDonnes: (new (init: ModelInit<CadeauxDonnes>) => CadeauxDonnes) & {
  copyOf(source: CadeauxDonnes, mutator: (draft: MutableModel<CadeauxDonnes>) => MutableModel<CadeauxDonnes> | void): CadeauxDonnes;
}

type EagerClesAuth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ClesAuth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dateDebutValidite: string;
  readonly listeCles: string;
  readonly commercesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClesAuth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ClesAuth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dateDebutValidite: string;
  readonly listeCles: string;
  readonly commercesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ClesAuth = LazyLoading extends LazyLoadingDisabled ? EagerClesAuth : LazyClesAuth

export declare const ClesAuth: (new (init: ModelInit<ClesAuth>) => ClesAuth) & {
  copyOf(source: ClesAuth, mutator: (draft: MutableModel<ClesAuth>) => MutableModel<ClesAuth> | void): ClesAuth;
}

type EagerEstClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EstClient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly categorie?: number | null;
  readonly clientsID: string;
  readonly commercesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEstClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EstClient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly categorie?: number | null;
  readonly clientsID: string;
  readonly commercesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EstClient = LazyLoading extends LazyLoadingDisabled ? EagerEstClient : LazyEstClient

export declare const EstClient: (new (init: ModelInit<EstClient>) => EstClient) & {
  copyOf(source: EstClient, mutator: (draft: MutableModel<EstClient>) => MutableModel<EstClient> | void): EstClient;
}

type EagerClients = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Clients, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nom: string;
  readonly prenom: string;
  readonly email: string;
  readonly telephone: string;
  readonly genre: string;
  readonly dateNaissance: string;
  readonly nombrePoints?: number | null;
  readonly EstClients?: (EstClient | null)[] | null;
  readonly Achete?: (Vente | null)[] | null;
  readonly Recoit?: (CadeauxDonnes | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClients = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Clients, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nom: string;
  readonly prenom: string;
  readonly email: string;
  readonly telephone: string;
  readonly genre: string;
  readonly dateNaissance: string;
  readonly nombrePoints?: number | null;
  readonly EstClients: AsyncCollection<EstClient>;
  readonly Achete: AsyncCollection<Vente>;
  readonly Recoit: AsyncCollection<CadeauxDonnes>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Clients = LazyLoading extends LazyLoadingDisabled ? EagerClients : LazyClients

export declare const Clients: (new (init: ModelInit<Clients>) => Clients) & {
  copyOf(source: Clients, mutator: (draft: MutableModel<Clients>) => MutableModel<Clients> | void): Clients;
}

type EagerVente = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vente, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nom: string;
  readonly details?: string | null;
  readonly montant: number;
  readonly clientsID: string;
  readonly commercesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVente = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vente, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nom: string;
  readonly details?: string | null;
  readonly montant: number;
  readonly clientsID: string;
  readonly commercesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Vente = LazyLoading extends LazyLoadingDisabled ? EagerVente : LazyVente

export declare const Vente: (new (init: ModelInit<Vente>) => Vente) & {
  copyOf(source: Vente, mutator: (draft: MutableModel<Vente>) => MutableModel<Vente> | void): Vente;
}

type EagerActualites = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Actualites, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly corps?: string | null;
  readonly image?: string | null;
  readonly commercesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyActualites = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Actualites, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly corps?: string | null;
  readonly image?: string | null;
  readonly commercesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Actualites = LazyLoading extends LazyLoadingDisabled ? EagerActualites : LazyActualites

export declare const Actualites: (new (init: ModelInit<Actualites>) => Actualites) & {
  copyOf(source: Actualites, mutator: (draft: MutableModel<Actualites>) => MutableModel<Actualites> | void): Actualites;
}

type EagerCategories = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categories, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nom: string;
  readonly Appartient?: (Commerces | null)[] | null;
  readonly photo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategories = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categories, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nom: string;
  readonly Appartient: AsyncCollection<Commerces>;
  readonly photo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Categories = LazyLoading extends LazyLoadingDisabled ? EagerCategories : LazyCategories

export declare const Categories: (new (init: ModelInit<Categories>) => Categories) & {
  copyOf(source: Categories, mutator: (draft: MutableModel<Categories>) => MutableModel<Categories> | void): Categories;
}

type EagerCadeaux = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cadeaux, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nom?: string | null;
  readonly nombreInitial: number;
  readonly nombreRestant: number;
  readonly dateDonne: string;
  readonly dateLimite?: string | null;
  readonly montant?: number | null;
  readonly EstCadeaux?: (CadeauxDonnes | null)[] | null;
  readonly photo?: string | null;
  readonly commercesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCadeaux = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cadeaux, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nom?: string | null;
  readonly nombreInitial: number;
  readonly nombreRestant: number;
  readonly dateDonne: string;
  readonly dateLimite?: string | null;
  readonly montant?: number | null;
  readonly EstCadeaux: AsyncCollection<CadeauxDonnes>;
  readonly photo?: string | null;
  readonly commercesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Cadeaux = LazyLoading extends LazyLoadingDisabled ? EagerCadeaux : LazyCadeaux

export declare const Cadeaux: (new (init: ModelInit<Cadeaux>) => Cadeaux) & {
  copyOf(source: Cadeaux, mutator: (draft: MutableModel<Cadeaux>) => MutableModel<Cadeaux> | void): Cadeaux;
}

type EagerCommerces = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Commerces, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly nom: string;
  readonly nomResponsable?: string | null;
  readonly prenomResponsable?: string | null;
  readonly Publie?: (Actualites | null)[] | null;
  readonly adresse: string;
  readonly telephone: string;
  readonly Offre?: (Cadeaux | null)[] | null;
  readonly Vend?: (Vente | null)[] | null;
  readonly genre?: string | null;
  readonly dateNaissance?: string | null;
  readonly presentationText?: string | null;
  readonly descriptionText?: string | null;
  readonly logo?: string | null;
  readonly adresseLong?: string | null;
  readonly Verifie?: (ClesAuth | null)[] | null;
  readonly EstClients?: (EstClient | null)[] | null;
  readonly adresseLat?: string | null;
  readonly categoriesID: string;
  readonly photos?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCommerces = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Commerces, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly nom: string;
  readonly nomResponsable?: string | null;
  readonly prenomResponsable?: string | null;
  readonly Publie: AsyncCollection<Actualites>;
  readonly adresse: string;
  readonly telephone: string;
  readonly Offre: AsyncCollection<Cadeaux>;
  readonly Vend: AsyncCollection<Vente>;
  readonly genre?: string | null;
  readonly dateNaissance?: string | null;
  readonly presentationText?: string | null;
  readonly descriptionText?: string | null;
  readonly logo?: string | null;
  readonly adresseLong?: string | null;
  readonly Verifie: AsyncCollection<ClesAuth>;
  readonly EstClients: AsyncCollection<EstClient>;
  readonly adresseLat?: string | null;
  readonly categoriesID: string;
  readonly photos?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Commerces = LazyLoading extends LazyLoadingDisabled ? EagerCommerces : LazyCommerces

export declare const Commerces: (new (init: ModelInit<Commerces>) => Commerces) & {
  copyOf(source: Commerces, mutator: (draft: MutableModel<Commerces>) => MutableModel<Commerces> | void): Commerces;
}