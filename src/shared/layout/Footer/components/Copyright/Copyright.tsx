import React from 'react';
import styles from './Copyright.module.scss';

interface CopyrightProps {
  className?: string;
}

export const Copyright = ({ className }: CopyrightProps) => {
  return (
    <div className={`${styles.copyright} ${className}`}>
      © {new Date().getFullYear()} Brd.ru. Все права защищены
    </div>
  );
};
