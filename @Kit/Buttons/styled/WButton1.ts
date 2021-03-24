import styled from 'styled-components';
import { WButton } from '.';

export const WButton1 = styled(WButton)`
  background: ${({ theme }) => theme.pallette.color30};
  color: ${({ theme }) => theme.pallette.color20};
  border-color: ${({ theme }) => theme.pallette.color30};

  svg {
    path {
      fill: ${({ theme }) => theme.pallette.color10};
    }
  }

  &:hover {
    /* box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color]; */
    /* background-color: #111 !important; */
    /* border-color: #33333399 !important;
    border-style: solid; */
    color: ${({ theme }) => theme.pallette.color10};
    /* opacity: 0.92; */
  }

  &:active:enabled {
    background-color: ${({ theme }) => theme.pallette.color30};
  }
`;
