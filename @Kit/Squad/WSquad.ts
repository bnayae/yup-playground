import styled from 'styled-components';
import { WSquadRaw } from './WSquadRaw';

/**
 * represent formation of controls
 */
export const WSquad = styled(WSquadRaw)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  &.mobile-view {
    grid-template-columns: 1fr;
  }
  grid-row-gap: 6rem;
  grid-column-gap: 4rem;
  grid-auto-rows: auto;

  .squad-field {
    display: grid;
    justify-content: stretch;
    justify-items: stretch;
    align-content: stretch;
    align-items: stretch;

    &.full-line {
      grid-column: 1 / span 2;
    }
  }
`;
