import React from 'react';
import { IWithClassName } from '../../contracts';

interface IProps extends IWithClassName {
  // id: number;
}

export const SampleARaw = ({ className }: IProps) => {
  return <div className={className}>Hi</div>;
};
