import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TargetGroupMenu.module.scss';
import { targetGroupConfig } from '@features/Navigation/config/menus';

export const TargetGroupMenu = () => {
  return (
    <div className={`fw-medium flex-wrap ${styles.navigation}`}>
      {targetGroupConfig.map(({ id, label, href }) => (
        <NavLink
          className={({ isActive }) => (isActive ? `link-underline` : '')}
          key={id}
          to={href}
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
};
