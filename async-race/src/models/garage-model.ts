import { CarModel } from './car-model';

export interface GarageModel {
  items: CarModel[];
  count: string | null;
}
