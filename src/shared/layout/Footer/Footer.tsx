import React from 'react';
import styles from './Footer.module.scss';
import { Container } from '@shared/layout/Container/Container';
import { Subscription } from '@shared/layout/Footer/components/Subscription/Subscription';
import { SocialLinks } from '@shared/layout/Footer/components/SocialLinks/SocialLinks';
import { AppLinks } from '@shared/layout/Footer/components/AppLinks/AppLinks';
import { ToggleContent } from '@shared/ui/ToggleContent/ToggleContent';
import { Icon } from '@shared/ui/Icon/Icon';
import { NavMenu } from '@features/Navigation/components/NavMenu/NavMenu';
import { footerLinks } from './config/footerLinks';
import { FooterLogo } from '@shared/layout/Footer/components/FooterLogo/FooterLogo';
import { Copyright } from '@shared/layout/Footer/components/Copyright/Copyright';

export const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <Container>
        <section className={`${styles.footerSection}`}>
          <FooterLogo />
          <Subscription />
          <SocialLinks />
          <AppLinks />
          <ToggleContent
            title={'Контакты'}
            className={`${styles.footerCol} ${styles.footerColContact}`}
          >
            <div>
              <Icon name={'phone'} />
              <address>
                <a className={'contact-text'} href="tel:88005117468">
                  8 (800) 511-74-68{' '}
                </a>
                <span className={'contact-meta'}>Бесплатная горячая линия Ежедневно с 9 до 21</span>
              </address>
            </div>
            <div>
              <Icon name={'letter'} />
              <address>
                <span className={'contact-text'}>Контактный Email</span>
                <a className={'contact-meta'} href="mailto:info@brd.ru">
                  info@brd.ru
                </a>
              </address>
            </div>
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
          <Copyright />
        </section>
      </Container>
    </footer>
  );
};
