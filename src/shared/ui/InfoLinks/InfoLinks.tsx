import React from 'react';
import styles from './InfoLinks.module.scss';
import { infoLinksConfig } from '@features/Navigation/config/menus';
import { NavLink } from 'react-router-dom';

export const InfoLinks = () => {
  return (
    <div className={`d-flex ${styles.infoLinks}`}>
      {infoLinksConfig.map(({ id, label, href }) => (
        <NavLink key={id} to={href} className={`fw-medium`}>
          {label}
        </NavLink>
      ))}
    </div>
  );
};
