import styled from 'styled-components';
import { WButton } from '.';

export const WSubmitButton = styled(WButton)`
  border-color: ${({ theme }) => theme.pallette.color24};
  background-color: ${({ theme }) => theme.pallette.color30};
  color: ${({ theme }) => theme.pallette.color20};
`;
