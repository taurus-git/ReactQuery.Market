import React from 'react';
import { cities } from '@features/DeliveryRegion/config/cities';
import { CitySelectorContextType } from '@features/DeliveryRegion/types/cities';
import { Icon } from '@shared/ui/Icon/Icon';

type CityListProps = Omit<CitySelectorContextType, 'isOpen' | 'toggleOpen'>;

export const CityList = ({ city, selectCity, close }: CityListProps) => {
  return (
    <div className={'city-list'}>
      Выбранный город: {city.name}
      <div>
        <button className={'close'} onClick={close}>
          <Icon name={'close'} />
        </button>
        <div>
          {cities.map((c) => (
            <button key={c.id} onClick={() => selectCity(c)}>
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
