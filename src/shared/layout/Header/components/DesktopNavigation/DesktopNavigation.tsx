import React from 'react';
import styles from './DesktopNavigation.module.scss';
import { TargetGroupMenu } from '@features/Navigation/components/TargetGroupMenu/TargetGroupMenu';

export const DesktopNavigation = () => {
  return (
    <div className={`d-flex justify-start flex-wrap ${styles.desktopNav}`}>
      <TargetGroupMenu />
    </div>
  );
};
