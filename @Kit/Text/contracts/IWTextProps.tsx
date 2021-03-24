import { IWithChildren, IWithClassName } from '../../../contracts';

export interface IWTextProps extends IWithChildren, IWithClassName {
  onClick?: () => void;
}
