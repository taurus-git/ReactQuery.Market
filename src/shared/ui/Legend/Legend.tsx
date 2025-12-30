import React from 'react';
//import styles from './Legend.css';

interface LegendProps {
  children?: React.ReactNode;
}

export const Legend = ({ children }: LegendProps) => {
  return <legend>{children}</legend>;
};
