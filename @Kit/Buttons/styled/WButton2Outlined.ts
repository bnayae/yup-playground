import styled from 'styled-components';
import { WButton } from '.';

export const WButton2Outlined = styled(WButton)`
  border: 3px solid #707070;
  background: transparent;
  border-color: ${({ theme }) => theme.pallette.color20};
  color: ${({ theme }) => theme.pallette.color31};

  svg {
    path {
      fill: ${({ theme }) => theme.pallette.color10};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.pallette.color20};
    border-color: ${({ theme }) => theme.pallette.color31}77;
    color: ${({ theme }) => theme.pallette.color31};
  }

  &:active {
    background-color: ${({ theme }) => theme.pallette.color20};
  }
`;
