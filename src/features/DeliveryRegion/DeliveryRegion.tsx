import React from 'react';
import { useCitySelector } from '@features/DeliveryRegion/hooks/useCitySelector';
import { CityDropdown } from '@features/DeliveryRegion/components/CityDropdown/CityDropdown';
import { CityModal } from '@features/DeliveryRegion/components/CityModal/CityModal';

export const DeliveryRegion = () => {
  const { isOpen, city, selectCity, toggleOpen, close } = useCitySelector();
  return (
    <>
      <CityDropdown city={city} toggleOpen={toggleOpen} />
      <CityModal isOpen={isOpen} city={city} selectCity={selectCity} close={close} />
    </>
  );
};
