import React from 'react';
import styles from './Checkbox.module.scss';
import { Icon } from '@shared/ui/Icon/Icon';

interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'onChange'
> {
  checked: boolean;
  label?: string;
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

export const Checkbox = ({ checked, label, onChange, children, ...inputProps }: CheckboxProps) => {
  return (
    <label className={`d-flex position-relative ${styles.checkbox}`}>
      <input
        type="checkbox"
        checked={checked}
        className={styles.checkboxInput}
        onChange={(e) => onChange?.(e.target.checked, e)}
        {...inputProps}
      ></input>
      <span className={`position-relative ${styles.checkboxCustom}`}>
        <Icon
          name={checked ? 'circle_filled' : 'circle'}
          color={checked ? 'var(--color-red)' : 'var(--color-black)'}
          className={`absolute-center`}
        />
      </span>

      {label && <span className={styles.checkboxLabel}>{label}</span>}
      {children && <span className={styles.checkboxCount}>{children}</span>}
    </label>
  );
};
