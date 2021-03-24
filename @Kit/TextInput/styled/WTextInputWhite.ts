import styled from 'styled-components';
import { WTextInputBase } from './WTextInputBase';

export const WTextInputWhite = styled(WTextInputBase)`
  .text {
    .MuiInputLabel-shrink {
      /* label */
      color: ${({ theme }) => theme.pallette.color20}AA;
    }
    & label {
      /* place-holder */
      color: ${({ theme }) => theme.pallette.color23};
    }
    & input {
      /* text */
      color: ${({ theme }) => theme.pallette.color31};
    }
  }
`;
