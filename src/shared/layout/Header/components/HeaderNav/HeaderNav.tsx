import React from 'react';
import styles from './HeaderNav.module.scss';
import { MenuButton } from '@features/Navigation/components/MenuButton/MenuButton';
import { TargetGroupMenu } from '@features/Navigation/components/TargetGroupMenu/TargetGroupMenu';

interface HeaderNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const HeaderNav = ({ isOpen, onToggle }: HeaderNavProps) => {
  return (
    <div className={`d-flex justify-start flex-wrap ${styles.headerNav}`}>
      <MenuButton isOpen={isOpen} onToggle={onToggle} />
      <TargetGroupMenu />
    </div>
  );
};
