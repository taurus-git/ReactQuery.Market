import React from 'react';
import styles from './MobileNavigation.module.scss';
import { MobileMenu } from '@features/Navigation/components/MobileMenu/MobileMenu';

interface MobileNavigationProps {
  onClose: () => void;
}

export const MobileNavigation = ({ onClose }: MobileNavigationProps) => {
  return (
    <nav className={`position-fixed w-50 h-screen ${styles.nav}`}>
      <MobileMenu onClose={onClose} />
    </nav>
  );
};
