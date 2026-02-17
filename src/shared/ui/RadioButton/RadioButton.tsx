import React from 'react';
import styles from './RadioButton.module.scss';
import { Icon } from '@shared/ui/Icon/Icon';

interface RadioButtonProps {
  className?: string;
  onClick?: () => void;
  active?: boolean;
  children?: React.ReactNode;
}

export const RadioButton = ({ className, onClick, active, children }: RadioButtonProps) => {
  const radioButtonClassName = [
    'd-flex align-center',
    className,
    styles.radioButton,
    active && styles.radioButtonActive,
  ]
    .filter((v): v is string => !!v)
    .join(' ');

  return (
    <button className={radioButtonClassName} onClick={onClick}>
      <Icon name={active ? 'circle_filled' : 'circle'} />
      {children}
    </button>
  );
};
