import React from 'react';
import { Icon } from '@shared/ui/Icon/Icon';
import styles from './MenuButton.module.scss';

interface MenuButtonProps {
  onToggle: () => void;
}

export const MenuButton = ({ onToggle }: MenuButtonProps) => {
  return (
    <button className={`position-relative ${styles.menuButton}`} onClick={onToggle}>
      <Icon name={'menu'} />
    </button>
  );
};
