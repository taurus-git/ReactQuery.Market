import React from 'react';
import styles from './Benefits.module.scss';
import { Icon } from '@shared/ui/Icon/Icon';

export const Benefits = () => {
  const benefits = [
    {
      id: 'free-delivery',
      icon: 'car',
      text: 'Бесплатная доставка*',
    },
    {
      id: 'payment-upon-delivery',
      icon: 'card',
      text: 'Оплата при получении ',
    },
    {
      id: 'return',
      icon: 'return',
      text: 'Возврат в течении 14 дней',
    },
  ];

  return (
    <div className={`d-flex justify-center align-center ${styles.benefits}`}>
      {benefits.map((i) => (
        <div key={i.id} className={`d-flex justify-center align-center ${styles.benefit}`}>
          <Icon name={i.icon} />
          <span>{i.text}</span>
        </div>
      ))}
    </div>
  );
};
