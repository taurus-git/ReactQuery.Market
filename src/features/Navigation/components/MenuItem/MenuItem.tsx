import React from 'react';
import { NavLink } from 'react-router-dom';

interface MenuItemProps {
  name: string;
  to: string;
  onClose: () => void;
  className?: string;
}

export const MenuItem = ({ name, to, onClose, className }: MenuItemProps) => {
  return (
    <NavLink onClick={onClose} to={to} className={`fw-medium ${className}`}>
      {name}
    </NavLink>
  );
};
