import React from 'react';
import styles from './DesktopMenu.module.scss';
import { Category } from '@features/Products/types/categories.types';
import { MenuItem } from '@features/Navigation/components/MenuItem/MenuItem';

interface DesktopMenuProps {
  data: Category[];
}

export const DesktopMenu = ({ data }: DesktopMenuProps) => {
  return (
    <nav className={`${styles.nav}`}>
      <ul className={`${styles.menu}`}>
        {data.map(({ slug, name }: Category) => (
          <li key={name}>
            <MenuItem name={name} to={`/products/category/${slug}`} className={`fw-medium`} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
