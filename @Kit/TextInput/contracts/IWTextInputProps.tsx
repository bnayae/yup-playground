import { IWTextInputSingleRowProps } from '.';

/**
 * Props for text input (single or multi row)
 */
export interface IWTextInputProps extends IWTextInputSingleRowProps {
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows?: number;
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsExpansionBeforeScroll?: number;

  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
