import React from 'react';
import styles from './Breakout.module.scss';
import { device } from '@shared/layout/Breakout/types/deviceType';

interface BreakoutProps {
  children: React.ReactNode;
  on?: device;
}

export const Breakout = ({ children, on = 'mobile' }: BreakoutProps) => {
  const breakoutClass =
    on === 'mobile'
      ? styles.breakoutMobile
      : on === 'tablet'
        ? styles.breakoutTablet
        : styles.breakoutAll;
  return <div className={`${styles.breakout} ${breakoutClass}`}>{children}</div>;
};
