import React from 'react';
import styles from './Subscription.module.scss';
import { Icon } from '@shared/ui/Icon/Icon';

export const Subscription = () => {
  return (
    <div className={`${styles.subscription}`}>
      <Icon name={'letter'} />
      <span>
        Подпишись на рассылку и получи <span className={'accent'}>-10%</span> скидку
      </span>
      <Icon name={'push'} />
    </div>
  );
};
