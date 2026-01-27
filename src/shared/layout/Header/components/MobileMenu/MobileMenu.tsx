import React from 'react';
import styles from './MobileMenu.module.scss';
import { MenuItem } from '@features/Navigation/components/MenuItem/MenuItem';
import { Category } from '@features/Products/types/categories.types';
import { Icon } from '@shared/ui/Icon/Icon';

interface MobileMenuProps {
  data: Category[];
  onClose: () => void;
}

export const MobileMenu = ({ data, onClose }: MobileMenuProps) => {
  return (
    <nav className={` ${styles.nav}`}>
      <ul className={`${styles.menu}`}>
        {data.map(({ slug, name }: Category) => (
          <li className={`d-flex align-center`} key={slug}>
            <MenuItem onClose={onClose} to={`/products/category/${slug}`} name={name} />
            <Icon name={'shevron'} size={10} className={`${styles.icon}`} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
