// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Notifications, CadeauxDonnes, ClesAuth, EstClient, Clients, Vente, Actualites, Categories, Cadeaux, Commerces } = initSchema(schema);

export {
  Notifications,
  CadeauxDonnes,
  ClesAuth,
  EstClient,
  Clients,
  Vente,
  Actualites,
  Categories,
  Cadeaux,
  Commerces
};