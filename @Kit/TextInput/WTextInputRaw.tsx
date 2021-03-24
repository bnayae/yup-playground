import { InputAdornment, TextField } from '@material-ui/core';
import React from 'react';
import { IWTextInputProps, WTextInputType } from '.';
import { Asterisk } from './Asterisk';

/**
 *
 * @param type Options: text, email
 */
export const WTextInputRaw = ({
  className,
  type = WTextInputType.text,
  errors,
  name = '',
  label,
  placeholder,
  rows,
  rowsExpansionBeforeScroll,
  margin,
  required,
  id,
  onBlur,
  onChange,
  onChangeText,
  ...rest
}: IWTextInputProps) => {
  const multiline: boolean = rowsExpansionBeforeScroll != null || rows != null;

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(e);
  };

  return (
    <div className={className}>
      <TextField
        id={id}
        variant="outlined"
        InputProps={{
          endAdornment: required && (
            <InputAdornment position="start">
              <Asterisk className="required" />
            </InputAdornment>
          ),
        }}
        type={type}
        className="text editable"
        error={errors && !!errors[name]}
        helperText={errors && errors[name]?.message}
        label={label}
        placeholder={placeholder}
        fullWidth
        multiline={multiline}
        rows={rows}
        rowsMax={rowsExpansionBeforeScroll}
        onChange={(e) => {
          if (onChangeText) onChangeText(e.target.value);
          if (onChange) onChange(e);
        }}
        {...rest}
        margin={margin}
        onBlur={handleBlur}
      />
    </div>
  );
};