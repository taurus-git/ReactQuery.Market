import React from 'react';
import { Icon } from '@shared/ui/Icon/Icon';

export const ServiceBenefits = () => {
  const services = [
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
    <div className={`d-flex serviceBenefits`}>
      {services.map((s) => (
        <div key={s.id} className={`d-flex`}>
          <Icon name={s.icon} />
          <span>{s.text}</span>
        </div>
      ))}
    </div>
  );
};
