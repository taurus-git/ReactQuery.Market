import React from 'react';
import { MenuItem } from '@features/Navigation/components/MenuItem/MenuItem';

interface MobileMenuProps {
  onClose: () => void;
}

export const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <ul>
      <MenuItem onClose={onClose} />
    </ul>
  );
};
