import styled from 'styled-components';
import { WTextInputBase } from './WTextInputBase';

export const WTextInput = styled(WTextInputBase)`
  .text {
    & label {
      /* place-holder */
    }
    & input {
      /* text */
    }
    & .MuiFormLabel-root.Mui-focused {
      /* label */
    }

    & .MuiInput-underline:after,
    & .MuiInput-underline:before {
    }
  }
`;
