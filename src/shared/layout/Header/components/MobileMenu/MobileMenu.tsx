import React from 'react';
import styles from './MobileMenu.module.scss';
import { MenuItem } from '@features/Navigation/components/MenuItem/MenuItem';
import { Category } from '@features/Products/types/categories.types';

interface MobileMenuProps {
  data: Category[];
  onClose: () => void;
}

export const MobileMenu = ({ data, onClose }: MobileMenuProps) => {
  return (
    <nav className={` ${styles.nav}`}>
      <ul className={`${styles.menu}`}>
        {data.map(({ slug, name }: Category) => (
          <li key={slug}>
            <MenuItem onClose={onClose} to={`category/${slug}`} name={name} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
