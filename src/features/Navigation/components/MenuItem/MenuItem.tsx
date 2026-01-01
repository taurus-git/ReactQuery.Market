import React from 'react';
import { NavLink } from 'react-router-dom';

interface MenuItemProps {
  onClose: () => void;
}

export const MenuItem = ({ onClose }: MenuItemProps) => {
  return (
    <li>
      <NavLink onClick={onClose} to={'/'}>
        Menu Item
      </NavLink>
    </li>
  );
};
