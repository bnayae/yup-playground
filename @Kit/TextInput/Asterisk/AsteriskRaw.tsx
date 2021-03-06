import React from 'react';
import { ISvgProps } from './ISvgProps';

export const AsteriskRaw = ({ className, ...other }: ISvgProps) => {
  return (
    <svg className={className} {...other} viewBox="0 0 24 24">
      <path d="M10,2H14L13.21,9.91L19.66,5.27L21.66,8.73L14.42,12L21.66,15.27L19.66,18.73L13.21,14.09L14,22H10L10.79,14.09L4.34,18.73L2.34,15.27L9.58,12L2.34,8.73L4.34,5.27L10.79,9.91L10,2Z" />
    </svg>
  );
};
