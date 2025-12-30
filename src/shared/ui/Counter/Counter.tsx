import React from 'react';

interface CounterProps {
  value: number;
}

export const Counter = ({ value }: CounterProps) => {
  return <>{value}</>;
};
