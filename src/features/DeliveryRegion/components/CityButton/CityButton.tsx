import React from 'react';
import styles from './CityButton.module.scss';
import { Icon } from '@shared/ui/Icon/Icon';
import { City } from '@features/DeliveryRegion/types/cities';

type CityButtonVariant = 'desktop' | 'mobile';

type CityButtonProps = {
  city: City;
  toggleOpen: () => void;
  variant?: CityButtonVariant;
};

export const CityButton = ({ city, toggleOpen, variant = 'mobile' }: CityButtonProps) => {
  return (
    <div className={`d-flex align-center ${variant === 'mobile' ? styles.mobile : styles.desktop}`}>
      <Icon name={'pin'} size={20} />
      <div className={`d-flex align-center flex-wrap ${styles.content}`}>
        <span>Ваш регион доставки:</span>
        <button onClick={toggleOpen} className={`d-flex align-center ${styles.trigger}`}>
          <span>{city.name}</span>
          <Icon name={'shevron'} size={10} />
        </button>
      </div>
    </div>
  );
};
