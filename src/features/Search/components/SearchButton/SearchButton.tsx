import React from 'react';
import { Icon } from '@shared/ui/Icon/Icon';

interface SearchButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const SearchButton = ({ className, children }: SearchButtonProps) => {
  return (
    <button className={className}>
      <Icon name={'search'} />
      {children}
    </button>
  );
};
