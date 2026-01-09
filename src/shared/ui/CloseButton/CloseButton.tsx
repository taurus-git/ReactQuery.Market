import React from 'react';
import { Icon } from '@shared/ui/Icon/Icon';

interface CloseButtonProps {
  onClose: () => void;
  className?: string;
}

export const CloseButton = ({ onClose, className = '' }: CloseButtonProps) => {
  return (
    <button onClick={onClose} className={className}>
      <Icon name={'close'} />
    </button>
  );
};
