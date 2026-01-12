import { createContext, useState, ReactNode } from 'react';
import { CitySelectorContextType } from '@features/DeliveryRegion/types/cities';
import { cities } from '@features/DeliveryRegion/config/cities';
import { City } from '@features/DeliveryRegion/types/cities';

export const CitySelectorContext = createContext<CitySelectorContextType | null>(null);

export const CitySelectorProvider = ({ children }: { children: ReactNode }) => {
  const [city, setCity] = useState<City>(cities[0]);

  const selectCity = (newCity: City) => {
    setCity(newCity);
  };

  return (
    <CitySelectorContext.Provider
      value={{
        city,
        selectCity,
      }}
    >
      {children}
    </CitySelectorContext.Provider>
  );
};
