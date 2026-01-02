import React from 'react';
import styles from './Overlay.module.scss';

interface OverlayProps {
  onClose: () => void;
}

export const Overlay = ({ onClose }: OverlayProps) => {
  return <div onClick={onClose} className={`d-block position-fixed ${styles.overlay}`}></div>;
};
