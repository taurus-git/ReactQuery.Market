import React from 'react';
import styles from './TopBar.module.scss';
import { Container } from '@shared/layout/Container/Container';
import { Popup } from '@shared/ui/Popup/Popup';
import { CityList } from '@features/DeliveryRegion/components/CityList/CityList';
import { Overlay } from '@shared/ui/Overlay/Overlay';
import { CityButton } from '@features/DeliveryRegion/components/CityButton/CityButton';
import { useCitySelectorState } from '@features/DeliveryRegion/hooks/useCitySelectorState';
import { CloseButton } from '@shared/ui/CloseButton/CloseButton';
import { InfoLinks } from '@shared/ui/InfoLinks/InfoLinks';
import { Benefits } from '@shared/layout/TopBar/components/Benefits/Benefits';

export const TopBar = () => {
  const { city, isOpen, close, toggle, handleSelectCity } = useCitySelectorState();

  return (
    <section className={`align-center ${styles.topBarSection}`}>
      <Container>
        <div className={`d-flex align-center justify-between ${styles.topBar}`}>
          <div className={`d-flex flex-wrap align-center ${styles.navigation}`}>
            {isOpen && (
              <>
                <Overlay onClose={close} />
                <Popup>
                  <CloseButton className={`position-absolute close`} onClose={close} />
                  <CityList city={city} onSelectCity={handleSelectCity} />
                </Popup>
              </>
            )}
            <CityButton city={city} toggleOpen={toggle} variant={'mobile'} />
            <InfoLinks />
          </div>
          <div className={`d-flex flex-wrap ${styles.benefits}`}>
            <Benefits />
          </div>
        </div>
      </Container>
    </section>
  );
};
