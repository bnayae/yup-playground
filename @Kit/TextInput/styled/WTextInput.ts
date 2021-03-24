import styled from 'styled-components';
import { WTextInputBase } from './WTextInputBase';

export const WTextInput = styled(WTextInputBase)`
  .text {
    & label {
      /* place-holder */
      color: ${({ theme }) => theme.pallette.color23};
      /* font-size:  ${({ theme }) => theme.deprecated.font.input.label}; */
    }
    & input {
      /* text */
      color: ${({ theme }) => theme.pallette.color31};
    }
    & .MuiFormLabel-root.Mui-focused {
      /* label */
      color: ${({ theme }) => theme.pallette.color31}99;
    }

    & .MuiInput-underline:after,
    & .MuiInput-underline:before {
      border-color: ${({ theme }) => theme.pallette.color24};
    }
  }
`;
