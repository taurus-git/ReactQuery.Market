import React from 'react';
import { Icon } from '@shared/ui/Icon/Icon';

interface AccountButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const AccountButton = ({ className, children }: AccountButtonProps) => {
  return (
    <button className={className}>
      <Icon name={'account'} />
      {children && <span className={'headerActions__label'}>{children}</span>}
    </button>
  );
};
