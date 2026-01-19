import React from 'react';
import styles from './Subscription.module.scss';
import { Icon } from '@shared/ui/Icon/Icon';

export const Subscription = () => {
  return (
    <div className={`p-6 fw-bold ${styles.subscription}`}>
      <Icon size={20} className={`${styles.icon} ${styles.iconLetter}`} name={'letter'} />
      <span>
        Подпишись на рассылку и получи <span className={'accent'}>-10%</span> скидку
      </span>
      <Icon size={22} className={`${styles.icon} ${styles.iconPush}`} name={'push'} />
    </div>
  );
};
