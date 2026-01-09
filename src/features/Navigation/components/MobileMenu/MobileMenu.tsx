import React from 'react';
import styles from './MobileMenu.module.scss';
import { MenuItem } from '@features/Navigation/components/MenuItem/MenuItem';

interface MobileMenuProps {
  onClose: () => void;
  className?: string;
}

export const MobileMenu = ({ onClose, className }: MobileMenuProps) => {
  return (
    <ul className={`${styles.menu} ${className}`}>
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
  );
};
