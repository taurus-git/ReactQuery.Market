import React from 'react';
import styles from './Copyright.module.scss';

export const Copyright = () => {
  return (
    <div className={styles.copyright}>© {new Date().getFullYear()} Brd.ru. Все права защищены</div>
  );
};
