import React from 'react';
import styles from './MobileMenu.module.scss';
import { MenuItem } from '@features/Navigation/components/MenuItem/MenuItem';

interface MobileMenuProps {
  onClose: () => void;
}

export const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <nav className={` ${styles.nav}`}>
      <ul className={`${styles.menu}`}>
        <li>
          <MenuItem onClose={onClose} />
        </li>
        <li>
          <MenuItem onClose={onClose} />
        </li>
        <li>
          <MenuItem onClose={onClose} />
        </li>
      </ul>
    </nav>
  );
};
