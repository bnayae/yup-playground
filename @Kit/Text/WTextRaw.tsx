import React from 'react';
import { IWTextProps } from './contracts';

export const WTextRaw = ({ className, children, ...other }: IWTextProps) => (
  <div className={className} {...other}>
    {children}
  </div>
);
