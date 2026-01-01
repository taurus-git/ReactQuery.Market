import React from 'react';
import { Icon } from '@shared/ui/Icon/Icon';

interface MenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MenuButton = ({ isOpen, onToggle }: MenuButtonProps) => {
  return (
    <button onClick={onToggle}>
      <Icon name={isOpen ? 'close' : 'menu'} />
    </button>
  );
};
