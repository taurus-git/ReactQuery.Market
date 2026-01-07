import { cities } from '@features/DeliveryRegion/config/cities';

export type City = (typeof cities)[number];
export type CityId = City['id'];

export interface CitySelectorContextType {
  isOpen: boolean;
  city: City;
  toggleOpen: () => void;
  close: () => void;
  selectCity: (newCity: City) => void;
}
