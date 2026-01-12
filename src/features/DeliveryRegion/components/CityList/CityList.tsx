import React from 'react';
import styles from './CityList.module.scss';
import { cities } from '@features/DeliveryRegion/config/cities';
import { City } from '@features/DeliveryRegion/types/cities';

interface CityListProps {
  city: City;
  onSelect: (city: City) => void;
}

export const CityList = ({ city, onSelect }: CityListProps) => {
  return (
    <div className={`h-100 p-8 d-flex justify-center align-center`}>
      <div className={`d-flex justify-center align-center flex-wrap ${styles.cityList}`}>
        {cities.map((c) => {
          const isActive = city.id === c.id;
          return (
            <button
              className={isActive ? 'link-underline' : undefined}
              key={c.id}
              onClick={() => onSelect(c)}
            >
              {c.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
