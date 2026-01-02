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
      <div className={styles.header}>
        {isMenuOpen && (
          <>
            <Overlay onClose={closeMenu} />
            <nav className={'position-fixed'}>
              <MobileMenu onClose={closeMenu} />
            </nav>
          </>
        )}
        <Container>
          <div className={`d-flex`}>
            <MenuButton isOpen={isMenuOpen} onToggle={toggleMenu} />
          </div>
        </Container>
      </div>
    </header>
  );
};
