import React from 'react';
import { Icon } from '@shared/ui/Icon/Icon';
import styles from './MenuButton.module.scss';

interface MenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MenuButton = ({ isOpen, onToggle }: MenuButtonProps) => {
  return (
    <button className={styles.menuButton} onClick={onToggle}>
      <Icon name={isOpen ? 'close' : 'menu'} />
    </button>
  );
};
