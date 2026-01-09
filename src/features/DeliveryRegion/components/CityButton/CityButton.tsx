import React from 'react';
import { Icon } from '@shared/ui/Icon/Icon';
import { CitySelectorContextType } from '@features/DeliveryRegion/types/cities';

type CityButtonProps = Pick<CitySelectorContextType, 'city' | 'toggleOpen'>;

export const CityButton = ({ city, toggleOpen }: CityButtonProps) => {
  return (
    <div>
      <Icon name={'pin'} />
      <div>
        <span>Ваш регион доставки:</span>
        <button onClick={toggleOpen}>
          <span>{city.name}</span>
          <Icon name={'shevron'} />
        </button>
      </div>
    </div>
  );
};
