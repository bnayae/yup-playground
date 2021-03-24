import styled from 'styled-components';
import { TextBackgroundOptions } from '..';
import { WTextInputRaw } from '../WTextInputRaw';

export const WTextInputBase = styled(WTextInputRaw)`
  display: grid;
  grid-template-areas: 'text del';
  grid-template-columns: 1fr auto;
  grid-column-gap: 2rem;
  align-items: center;

  .editable {
    background: ${({ theme, disabled, background }) =>
      // eslint-disable-next-line no-nested-ternary
      disabled
        ? theme.pallette.color22
        : background && background === TextBackgroundOptions.alt
        ? theme.pallette.color20
        : theme.pallette.color21};
  }

  .MuiInputAdornment-root {
    align-self: ${({ rows }) => (rows ? 'start' : undefined)};
    padding-top: ${({ rows }) => (rows ? 1 : 0)}rem;
    height: 2rem;
  }
  .MuiOutlinedInput-multiline {
    font: ${({ theme }) => theme.deprecated.font.input.text};
  }

  .text {
    /* https://www.w3schools.com/cssref/pr_grid-area.asp */
    grid-area: 1 / text / 1 / del;
    & label {
      font: ${({ theme }) => theme.deprecated.font.input.label};
      & + .MuiInput-formControl {
        /* form control */
      }
      & + .label.mui-focused {
        /* color: green; */
      }
    }

    * legend {
      width: 0 !important;
      max-width: 0 !important;
    }

    [class*='PrivateNotchedOutline-legendNotched'] {
      width: 0;
      max-width: 0;
    }

    legend {
      span {
        padding-right: 3.5rem;
        padding-left: 3.5rem;
      }
    }

    /* .PrivateNotchedOutline-legendNotched-* {
      width: 0;
      max-width: 0;
    }

    .PrivateNotchedOutline-legendLabelled-* {
      width: 0;
      max-width: 0;
    } */

    & input {
      font: ${({ theme }) => theme.deprecated.font.input.text};
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
      }
    }
    & .MuiFormLabel-root.Mui-focused {
      /* color: magenta; */
    }

    & .MuiInput-underline:after,
    & .MuiInput-underline:before {
      /* color: green; */
    }
    .required {
      fill: ${({ theme }) => theme.pallette.color10}aa;
      width: 2rem;
      margin-left: 0.7rem;
      align-self: start;
    }

    & .MuiInputLabel-outlined {
      /* transform: translate(1.6rem, 3.2rem) scale(2); */

      &.MuiInputLabel-shrink {
        transform: translate(0.5rem, -3.8rem) scale(1);
      }
    }
  }

  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline,
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.pallette.color24};
    border-width: ${({ theme }) => theme.deprecated.size.border.default}px;

    &:hover:enabled {
      border-width: ${({ theme }) => theme.deprecated.size.border.hover}px;
    }

    &:focus:enabled {
      border-width: ${({ theme }) => theme.deprecated.size.border.focus}px;
    }

    &:active:enabled {
      border-width: ${({ theme }) => theme.deprecated.size.border.focus}px;
    }
  }

  .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']
    .MuiAutocomplete-endAdornment {
    .MuiSvgIcon-root {
      width: 3rem;
      height: 3rem;
    }
  }

  .read-only {
    background: transparent;
  }

  .btn-delete {
    grid-area: del;
    z-index: 99;
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    margin-right: 3rem;
  }
`;
