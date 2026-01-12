import React, { useCallback, useState } from 'react';
import styles from './Header.module.scss';
import { Container } from '@shared/layout/Container/Container';
import { DesktopNavigation } from '@shared/layout/Header/components/DesktopNavigation/DesktopNavigation';
import { HeaderLogo } from '@shared/layout/Header/components/HeaderLogo/HeaderLogo';
import { HeaderActions } from '@shared/layout/Header/components/HeaderActions/HeaderActions';
import { FullScreenPanel } from '@shared/ui/FullScreenPanel/FullScreenPanel';
import { useCitySelector } from '@features/DeliveryRegion/hooks/useCitySelector';
import { CityList } from '@features/DeliveryRegion/components/CityList/CityList';
import { MenuButton } from '@features/Navigation/components/MenuButton/MenuButton';
import { MobileMenu } from '@shared/layout/Header/components/MobileMenu/MobileMenu';
import { Overlay } from '@shared/ui/Overlay/Overlay';
import { Icon } from '@shared/ui/Icon/Icon';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const { isOpen, city, selectCity, toggleOpen, close } = useCitySelector();
  return (
    <header>
      {isMenuOpen && (
        <>
          <Overlay onClose={closeMenu} />
          <MobileMenu closeMenu={closeMenu} toggleOpen={toggleOpen} city={city} />
        </>
      )}
      {isOpen && (
        <FullScreenPanel>
          <button className={`position-absolute ${styles.close}`} onClick={close}>
            <Icon name={'close'} />
          </button>
          <CityList city={city} onSelect={selectCity} />
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
