import React from 'react';
//import styles from './Fieldset.scss';

interface FieldsetProps {
  children: React.ReactNode;
}

export const Fieldset = ({ children }: FieldsetProps) => {
  return <fieldset>{children}</fieldset>;
};
