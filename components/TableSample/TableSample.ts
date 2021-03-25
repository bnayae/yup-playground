import styled from 'styled-components';
import { TableSampleRaw } from './TableSampleRaw';

export const TableSample = styled(TableSampleRaw)`
  display: grid;
  justify-content: center;
  justify-items: center;
  align-content: start;
  align-items: start;
  grid-template-areas:
    '. . .'
    '. content .'
    '. . .'
    '. summary .'
    '. . .';
  grid-template-columns: 1fr 80vw 1fr;
  grid-template-rows: 2rem auto 2rem auto 1fr;

  width: 99vw;

  .content {
    grid-area: content;
  }

  .summary {
    grid-area: summary;
    display: grid;
    grid-auto-flow: rows;
  }
`;
