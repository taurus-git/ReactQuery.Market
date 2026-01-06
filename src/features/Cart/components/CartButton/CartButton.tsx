import React from 'react';
import { Icon } from '@shared/ui/Icon/Icon';

interface CartProps {
  className?: string;
  children?: React.ReactNode;
}

export const CartButton = ({ className, children }: CartProps) => {
  return (
    <button className={className}>
      <Icon name={'cart'} />
      {children}
    </button>
  );
};
