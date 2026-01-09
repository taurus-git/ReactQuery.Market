import React from 'react';
import { NavLink } from 'react-router-dom';

interface MenuItemProps {
  onClose: () => void;
}

export const MenuItem = ({ onClose }: MenuItemProps) => {
  return (
    <NavLink onClick={onClose} to={'/'} className={'fw-medium'}>
      Menu Item
    </NavLink>
  );
};
