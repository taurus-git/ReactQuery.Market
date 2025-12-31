import React from 'react';
import styles from './Legend.module.scss';

interface LegendProps {
  children?: React.ReactNode;
}

export const Legend = ({ children }: LegendProps) => {
  return <legend className={styles.legend}>{children}</legend>;
};
