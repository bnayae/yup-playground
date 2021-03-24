import { CSSProperties } from 'react';
import { IWithClassName } from '../../../contracts';

export interface ISvgProps // React.SVGProps<SVGSVGElement>,
  extends IWithClassName {
  fill?: string;
  stroke?: string;
  height?: number | string;
  width?: number | string;
  style?: CSSProperties;
  display?: number | string;
  offset?: number | string;
  opacity?: number | string;
  fontFamily?: string;
  fontSize?: number | string;
  fontSizeAdjust?: number | string;
  fontStretch?: number | string;
  fontStyle?: number | string;
  fontVariant?: number | string;
  fontWeight?: number | string;
  format?: number | string;

  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}
