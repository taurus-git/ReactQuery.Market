import React from 'react';
import styles from './DeliveryItem.module.scss';
import { Icon } from '@shared/ui/Icon/Icon';

interface DeliveryItemProps {
  icon: string;
  children?: React.ReactNode;
  time: string;
  price?: number;
  priceFree?: boolean;
  priceCrossed?: number;
}

export const DeliveryItem = ({
  icon,
  children,
  time,
  price,
  priceFree,
  priceCrossed,
}: DeliveryItemProps) => {
  return (
    <div className={`${styles.delivery} d-flex align-center`}>
      <div className={`${styles.image} d-flex justify-center align-center`}>
        <Icon name={icon} size={49} />
      </div>
      <div className={`${styles.content}`}>
        {children}
        <time className={`${styles.time}`}>{time}</time>
        <span className={`${styles.divider}`}>/</span>
        {price && <span className={`${styles.price}`}>{price} рублей</span>}
        {priceFree && <span className={`${styles.priceFree}`}>Бесплатно </span>}
        {priceCrossed && <span className={`${styles.priceCrossed}`}>{priceCrossed} ₽</span>}
      </div>
    </div>
  );
};
