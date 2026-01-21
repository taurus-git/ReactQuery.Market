import React from 'react';
import styles from './Footer.module.scss';
import { Container } from '@shared/layout/Container/Container';
import { Subscription } from '@shared/layout/Footer/components/Subscription/Subscription';
import { SocialLinks } from '@shared/layout/Footer/components/SocialLinks/SocialLinks';
import { AppLinks } from '@shared/layout/Footer/components/AppLinks/AppLinks';
import { ToggleContent } from '@shared/ui/ToggleContent/ToggleContent';
import { NavMenu } from '@features/Navigation/components/NavMenu/NavMenu';
import { footerLinks } from './config/footerLinks';
import { FooterLogo } from '@shared/layout/Footer/components/FooterLogo/FooterLogo';
import { Copyright } from '@shared/layout/Footer/components/Copyright/Copyright';
import { Contacts } from '@shared/layout/Footer/components/Contacts/Contacts';

export const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <Container>
        <section className={`d-grid ${styles.footerSection}`}>
          <FooterLogo />
          <Subscription />
          <SocialLinks />
          <AppLinks />
          <ToggleContent title={'Контакты'} className={`${styles.footerContacts}`}>
            <Contacts />
          </ToggleContent>
          <ToggleContent title={'Помощь'} className={`${styles.footerCol} ${styles.footerHelp}`}>
            <NavMenu list={footerLinks.help} />
          </ToggleContent>
          <ToggleContent
            title={'Компания'}
            className={`${styles.footerCol} ${styles.footerCompany}`}
          >
            <NavMenu list={footerLinks.company} />
          </ToggleContent>
          <ToggleContent
            title={'Boardriders Inc.'}
            className={`${styles.footerCol} ${styles.footerBrand}`}
          >
            <NavMenu list={footerLinks.brands} />
          </ToggleContent>
          <Copyright className={`${styles.footerCopyright}`} />
        </section>
      </Container>
    </footer>
  );
};
