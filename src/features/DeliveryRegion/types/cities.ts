import { cities } from '@features/DeliveryRegion/config/cities';

export type City = (typeof cities)[number];

export interface CitySelectorContextType {
  city: City;
  selectCity: (newCity: City) => void;
}
