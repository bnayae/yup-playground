import { PropTypes, SelectProps } from '@material-ui/core';
import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import { TextBackgroundOptions, WTextInputType } from '.';
import { IWithClassName } from '../../../contracts';

/**
 * Props for text input (single row)
 */
export interface IWTextInputSingleRowProps extends IWithClassName {
  id?: string;
  /**
   * The label content.
   */
  label?: React.ReactNode;
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value?: unknown;
  /**
   * The default value of the `input` element.
   */
  defaultValue?: unknown;
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder?: string;
  /**
   * If `true`, the label is displayed as required and the `input` element` will be required.
   */
  required?: boolean;
  /**
   * text type.
   */
  type?: WTextInputType;
  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error?: string;
  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus?: boolean;
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete?: string;
  /**
   * The helper text content.
   */
  helperText?: React.ReactNode;

  onCLick?: MouseEventHandler<HTMLElement>;
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onChangeText?: (data: string) => void;

  /**
   * Name attribute of the `input` element.
   */
  name?: string;

  // /**
  //  * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
  //  */
  margin?: PropTypes.Margin;
  // /**
  //  * Props applied to the [`Select`](/api/select/) element.
  //  */
  SelectProps?: Partial<SelectProps>;

  background?: TextBackgroundOptions;
}
