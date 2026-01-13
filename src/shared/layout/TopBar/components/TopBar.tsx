import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TopBar.module.scss';
import { Container } from '@shared/layout/Container/Container';
import { infoLinksConfig } from '@features/Navigation/config/menus';
import { Popup } from '@shared/ui/Popup/Popup';
import { CityList } from '@features/DeliveryRegion/components/CityList/CityList';
import { Overlay } from '@shared/ui/Overlay/Overlay';
import { CityButton } from '@features/DeliveryRegion/components/CityButton/CityButton';
import { useCitySelectorState } from '@features/DeliveryRegion/hooks/useCitySelectorState';
import { Icon } from '@shared/ui/Icon/Icon';

export const TopBar = () => {
  const { city, isOpen, close, toggle, handleSelectCity } = useCitySelectorState();

  return (
    <section className={`d-flex align-center ${styles.topBarSection}`}>
      <Container>
        <div className={`d-flex align-center justify-between ${styles.topBar}`}>
          <div className={`d-flex ${styles.navigation}`}>
            {isOpen && (
              <>
                <Overlay onClose={close} />
                <Popup>
                  <button className={`position-absolute ${styles.close}`} onClick={close}>
                    <Icon name={'close'} />
                  </button>
                  <CityList city={city} onSelectCity={handleSelectCity} />
                </Popup>
              </>
            )}
            <CityButton city={city} toggleOpen={toggle} variant={'mobile'} />
            <div className={'d-flex'}>
              {infoLinksConfig.map(({ id, label, href }) => (
                <NavLink key={id} to={href}>
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className={`d-flex ${styles.benefits}`}>
            <div>ServiceBenefits</div>
          </div>
        </div>
      </Container>
    </section>
  );
};
