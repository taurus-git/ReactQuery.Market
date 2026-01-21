import React from 'react';
import styles from './Subscription.module.scss';
import { Icon } from '@shared/ui/Icon/Icon';

export const Subscription = () => {
  return (
    <button className={`d-grid p-6 fw-bold ${styles.subscription}`}>
      <Icon size={20} className={`${styles.iconLetter}`} name={'letter'} />
      <span className={`${styles.text}`}>
        Подпишись на рассылку и получи <span className={'accent'}>-10%</span> скидку
      </span>
      <Icon size={22} className={`${styles.iconPush}`} name={'push'} />
    </button>
  );
};
