import styled from 'styled-components';
import { SampleARaw } from './SampleARaw';

export const SampleA = styled(SampleARaw)`
  display: grid;
  justify-iteSampleA .text {
    min-width: 30rem;
  }
  .header {
    display: grid;
    grid-template-columns: repeat(8, auto);
    grid-column-gap: 1rem;
    align-items: center;
    & .btn {
      height: 2rem;
    }
    & .title {
      color: #777;
    }
  }
`;
