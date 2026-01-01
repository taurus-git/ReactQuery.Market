import React, { useCallback, useState } from 'react';
import styles from './Header.module.scss';
import { Container } from '@shared/layout/Container/Container';
import { MenuButton } from '@features/Navigation/components/MenuButton/MenuButton';
import { MobileMenu } from '@features/Navigation/components/MobileMenu/MobileMenu';
import { Overlay } from '@shared/ui/Overlay/Overlay';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setIsMenuOpen(false), [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, [isMenuOpen]);

  return (
    <header>
      {isMenuOpen && (
        <>
          <Overlay onClose={closeMenu} />
          <nav>
            <MobileMenu onClose={closeMenu} />
          </nav>
        </>
      )}
      <Container>
        <div className={styles.headerMain}>
          <MenuButton isOpen={isMenuOpen} onToggle={toggleMenu} />
        </div>
      </Container>
    </header>
  );
};
