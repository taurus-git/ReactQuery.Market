import React from 'react';
import { MenuItem } from '@features/Navigation/types/navigation';
import { Link } from 'react-router-dom';

interface NavMenuProps {
  list: MenuItem[];
  className?: string;
}

export const NavMenu = ({ list, className }: NavMenuProps) => {
  return (
    <nav className={className}>
      <ul>
        {list.map(({ id, href, label }) => (
          <li key={id}>
            <Link to={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
