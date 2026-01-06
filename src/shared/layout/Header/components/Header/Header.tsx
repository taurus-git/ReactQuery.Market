import React, { useCallback, useState } from 'react';
import styles from './Header.module.scss';
import { Container } from '@shared/layout/Container/Container';
import { Overlay } from '@shared/ui/Overlay/Overlay';
import { HeaderNav } from '@shared/layout/Header/components/HeaderNav/HeaderNav';
import { HeaderLogo } from '@shared/layout/Header/components/HeaderLogo/HeaderLogo';
import { HeaderActions } from '@shared/layout/Header/components/HeaderActions/HeaderActions';
import { MobileNavigation } from '@shared/layout/Header/components/MobileNavigation/MobileNavigation';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <header>
      <div className={`d-flex align-center ${styles.header}`}>
        {isMenuOpen && (
          <>
            <Overlay onClose={closeMenu} />
            <MobileNavigation onClose={closeMenu} />
          </>
        )}
        <Container>
          <div className={`d-flex align-center justify-between`}>
            <HeaderNav isOpen={isMenuOpen} onToggle={toggleMenu} />
            <HeaderLogo />
            <HeaderActions />
          </div>
        </Container>
      </div>
    </header>
  );
};
