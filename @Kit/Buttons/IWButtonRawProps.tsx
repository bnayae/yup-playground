import { WButtonState } from '.';
import { IWithClassName } from '../../contracts';

export interface IWButtonRawProps extends IWithClassName {
  title?: string;
  wrap?: boolean;
  state?: WButtonState;

  minWidth?: string;
  borderRadius?: string;
  border?: string;
}
