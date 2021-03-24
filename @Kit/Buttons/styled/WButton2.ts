import styled from 'styled-components';
import { WButton } from '.';

export const WButton2 = styled(WButton)`
  background: ${({ theme }) => theme.pallette.color20};
  color: ${({ theme }) => theme.pallette.color31};
  border-color: ${({ theme }) => theme.pallette.color20};
  .loading {
    .spinning {
      color: ${({ theme }) => theme.pallette.color10};
    }
  }

  &:hover {
    /* box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color]; */
    /* background-color: ${({ theme }) => theme.pallette.color21}; */
    color: ${({ theme }) => theme.pallette.color10};
  }

  &:active:enabled {
    box-shadow: 0.3rem 0.2rem 1rem ${({ theme }) => theme.pallette.color30}66;
    /* background-color: ${({ theme }) => theme.pallette.color20}; */
  }

  svg {
    path {
      fill: ${({ theme }) => theme.pallette.color10};
    }
  }
`;
