import React, { useState } from 'react';
import styles from './ToggleContent.module.scss';
import { Icon } from '@shared/ui/Icon/Icon';

interface ToggleContentProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const ToggleContent = ({ title, children, className }: ToggleContentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen((prev) => !prev);

  const toggleClass = isOpen ? styles.open : '';
  const iconClass = isOpen ? 'rotate-180' : '';

  return (
    <div className={`${styles.toggleSection} ${toggleClass} ${className}`}>
      <div className={`${styles.text}`}>
        <button className={`position-relative ${styles.action}`} onClick={handleClick}>
          <span className={`${styles.actionText} fw-bold`}>{title}</span>
          <span className={`${styles.actionIcon}`}>
            <Icon name={'shevron'} size={10} className={iconClass} />
          </span>
        </button>
      </div>
      <div className={`${styles.content}`}>{children}</div>
    </div>
  );
};
