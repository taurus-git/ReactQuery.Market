import React from 'react';

interface PopupProps {
  children: React.ReactNode;
}

export const Popup = ({ children }: PopupProps) => {
  return <div className={'popup'}>{children}</div>;
};
