import React, { useCallback, useState } from 'react';
import styles from './Header.module.scss';
import { Container } from '@shared/layout/Container/Container';
import { Overlay } from '@shared/ui/Overlay/Overlay';
import { DesktopNavigation } from '@shared/layout/Header/components/DesktopNavigation/DesktopNavigation';
import { HeaderLogo } from '@shared/layout/Header/components/HeaderLogo/HeaderLogo';
import { HeaderActions } from '@shared/layout/Header/components/HeaderActions/HeaderActions';
import { MobileNavigation } from '@shared/layout/Header/components/MobileNavigation/MobileNavigation';
import { FullScreenPanel } from '@shared/ui/FullScreenPanel/FullScreenPanel';
import { CityButton } from '@features/DeliveryRegion/components/CityButton/CityButton';
import { useCitySelector } from '@features/DeliveryRegion/hooks/useCitySelector';
import { CityList } from '@features/DeliveryRegion/components/CityList/CityList';
import { MenuButton } from '@features/Navigation/components/MenuButton/MenuButton';
import { CloseButton } from '@shared/ui/CloseButton/CloseButton';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const { isOpen, city, selectCity, toggleOpen, close } = useCitySelector();
  return (
    <header>
      {isMenuOpen && ( // Menu Open
        <div className={`${styles.mobileMenuWrapper}`}>
          <Overlay onClose={closeMenu} />
          <div
            className={`h-screen position-fixed w-75 d-flex flex-column justify-between ${styles.mobileMenu}`}
          >
            <CloseButton
              onClose={closeMenu}
              className={`position-absolute ${styles.closeButton}`}
            />
            <MobileNavigation onClose={closeMenu} />
            <CityButton city={city} toggleOpen={toggleOpen} />
          </div>
        </div>
      )}
      {isOpen && ( // Select City Panel Open
        <FullScreenPanel>
          <CityList city={city} selectCity={selectCity} close={close} />
        </FullScreenPanel>
      )}
      <div className={`d-flex align-center ${styles.header}`}>
        <Container>
          <div className={`d-flex align-center justify-between`}>
            <MenuButton onToggle={toggleMenu} />
            <DesktopNavigation />
            <HeaderLogo />
            <HeaderActions />
          </div>
        </Container>
      </div>
    </header>
  );
};
