/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { WButtonState } from '.';
import { IWButtonRawProps } from './IWButtonRawProps';

export const WButtonRaw = ({
  className,
  title,
  onClick,
  disabled,
  wrap,
  state,
  type = 'submit',
  children,
}: IWButtonRawProps &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) => {
  const txtCls = wrap ? 'text no-select' : 'text no-select no-wrap';
  let cls =
    state === WButtonState.submitting ? `${className} submitting` : className;

  if (children) cls = `${cls} with-children`;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (state !== WButtonState.submitting && onClick) {
      onClick(e);
    }
  };

  return (
    // eslint-disable react/button-has-type
    <button
      type={type}
      className={cls}
      onClick={handleClick}
      disabled={disabled}
    >
      <span className={txtCls}>{title}</span>
      {children && <div className="children">{children}</div>}
    </button>
  );
};
