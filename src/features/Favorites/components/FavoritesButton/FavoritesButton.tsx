import React from 'react';
import { Icon } from '@shared/ui/Icon/Icon';

interface FavoritesButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const FavoritesButton = ({ className, children }: FavoritesButtonProps) => {
  return (
    <button className={className}>
      <Icon name={'star'} />
      {children && <span className={'headerActions__label'}>{children}</span>}
    </button>
  );
};
