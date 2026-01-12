import React from 'react';
import styles from './MobileMenu.module.scss';
import { City } from '@features/DeliveryRegion/types/cities';
import { CloseButton } from '@shared/ui/CloseButton/CloseButton';
import { MobileNavigation } from '@shared/layout/Header/components/MobileNavigation/MobileNavigation';
import { CityButton } from '@features/DeliveryRegion/components/CityButton/CityButton';

interface MobileMenuProps {
  closeMenu: () => void;
  toggleOpen: () => void;
  city: City;
}

export const MobileMenu = ({ closeMenu, toggleOpen, city }: MobileMenuProps) => {
  return (
    <div
      className={`h-screen position-fixed w-75 d-flex flex-column justify-between ${styles.menu}`}
    >
      <CloseButton onClose={closeMenu} className={`position-absolute ${styles.closeButton}`} />
      <MobileNavigation onClose={closeMenu} />
      <CityButton city={city} toggleOpen={toggleOpen} variant={'mobile'} />
    </div>
  );
};
