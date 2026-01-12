import { useCallback, useState } from 'react';
import { useCitySelector } from '@features/DeliveryRegion/hooks/useCitySelector';
import { City } from '@features/DeliveryRegion/types/cities';

export const useCitySelectorState = () => {
  const [isOpen, setisOpen] = useState(false);
  const { city, selectCity } = useCitySelector();

  const close = useCallback(() => {
    setisOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setisOpen((prev) => !prev);
  }, []);

  const handleSelectCity = useCallback(
    (city: City) => {
      selectCity(city);
      close();
    },
    [selectCity, close],
  );

  return {
    city,
    isOpen,
    close,
    toggle,
    handleSelectCity,
  };
};
