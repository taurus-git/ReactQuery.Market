import React from 'react';
import styles from './Contacts.module.scss';
import { Icon } from '@shared/ui/Icon/Icon';

export const Contacts = () => {
  return (
    <>
      <div className={`${styles.contact}`}>
        <Icon name={'phone'} />
        <address>
          <a className={`${styles.text} d-block fw-bold`} href="tel:+78005117468">
            8 (800) 511-74-68
          </a>
          <p className={`${styles.meta}`}>Бесплатная горячая линия</p>
          <p className={`${styles.meta}`}>Ежедневно с 9 до 21</p>
        </address>
      </div>

      <div className={`${styles.contact}`}>
        <Icon name={'letter'} />
        <address>
          <p className={`${styles.text} fw-bold`}>Контактный Email</p>
          <a className={`${styles.meta}`} href="mailto:info@brd.ru">
            info@brd.ru
          </a>
        </address>
      </div>
    </>
  );
};
