import React from 'react';
import { cities } from '@features/DeliveryRegion/config/cities';
import { CitySelectorContextType } from '@features/DeliveryRegion/types/cities';
import { Overlay } from '@shared/ui/Overlay/Overlay';

type CityModalProps = Omit<CitySelectorContextType, 'toggleOpen'>;

export const CityModal = ({ isOpen, city, selectCity, close }: CityModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      Выбранный город: {city.name}
      <Overlay onClose={close} />
      <div>
        {cities.map((c) => (
          <button key={c.id} onClick={() => selectCity(c)}>
            {c.name}
          </button>
        ))}
      </div>
    </>
  );
};
