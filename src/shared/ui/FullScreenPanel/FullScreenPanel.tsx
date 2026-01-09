import React from 'react';
import styles from './FullScreenPanel.module.scss';

interface FullScreenPanelProps {
  children: React.ReactNode;
}

export const FullScreenPanel = ({ children }: FullScreenPanelProps) => {
  return <div className={`full-size position-fixed ${styles.fullScreen}`}>{children}</div>;
};
