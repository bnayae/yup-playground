import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { IWTextInputProps, WTextInput, WTextInputType } from '.';
import { WTextInputRaw } from './WTextInputRaw';

export default {
  title: 'Common/Text Input',
  component: WTextInputRaw,
  parameters: {
    actions: {
      handles: ['mouseover'],
    },
  },

  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
        options: [WTextInputType.text, WTextInputType.email],
      },
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    // errors: { control: 'text' },
    rows: { control: 'number', min: 1, max: 6, step: 1, value: undefined },
    rowsExpansionBeforeScroll: {
      control: 'number',
      min: 1,
      max: 6,
      step: 1,
      value: undefined,
    },
    required: { control: { type: 'boolean' } },
    withDelete: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    error: { control: { type: 'boolean' } },
    autoFocus: { control: { type: 'boolean' } },
    autoComplete: { control: { type: 'boolean' } },
    onChange: { action: 'changed' },
  },
} as Meta;

const defaultProps: IWTextInputProps = {
  type: WTextInputType.text,
  label: 'Name',
  placeholder: 'Enter you name',
};

export const Default = (args: IWTextInputProps) => <WTextInput {...args} />;
Default.args = defaultProps;
Default.storyName = 'Default Text Input';

export const MultiLine = (args: IWTextInputProps) => <WTextInput {...args} />;
MultiLine.args = { ...defaultProps, rows: 3, rowsExpansionBeforeScroll: 5 };
MultiLine.storyName = 'Multiline Text Input';
