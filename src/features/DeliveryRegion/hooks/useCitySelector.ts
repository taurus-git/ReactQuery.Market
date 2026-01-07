import { useContext } from 'react';
import { CitySelectorContext } from '../context/CitySelectorContext';

export const useCitySelector = () => {
  const context = useContext(CitySelectorContext);

  if (!context) {
    throw new Error('useCitySelector must be used inside a city selector');
  }

  return context;
};
