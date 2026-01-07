import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TopBar.module.scss';
import { Container } from '@shared/layout/Container/Container';
import { infoLinksConfig } from '@features/Navigation/config/menus';
//import { Icon } from '@shared/ui/Icon/Icon';
import { DeliveryRegion } from '@features/DeliveryRegion/DeliveryRegion';

export const TopBar = () => {
  return (
    <section className={'d-flex justify-between align-center'}>
      <Container>
        <div className={`d-flex ${styles.left}`}>
          <DeliveryRegion />

          <div className={'d-flex'}>
            {infoLinksConfig.map(({ id, label, href }) => (
              <NavLink key={id} to={href}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>
        <div className={`d-flex ${styles.right}`}>
          <div>ServiceBenefits</div>
        </div>
      </Container>
    </section>
  );
};
