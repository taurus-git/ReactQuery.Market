import React from 'react';
import styles from './Popup.module.scss';

interface PopupProps {
  children: React.ReactNode;
}

export const Popup = ({ children }: PopupProps) => {
  return <div className={`position-fixed w-50 p-8 ${styles.popup}`}>{children}</div>;
};
