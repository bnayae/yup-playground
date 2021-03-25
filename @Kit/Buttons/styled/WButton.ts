import styled from 'styled-components';
import { WButtonRaw } from '../WButtonRaw';

const arrowAreaWidth = '5.5rem';
const arrowWidth = '4.5rem';
const defaultMinWidth = '40rem';

export const WButton = styled(WButtonRaw)`
  display: grid;
  background: pink;
  grid-template-areas:
    '.        .    .'
    'loading  text .'
    '.        .    .';
  grid-template-columns: minMax(1.5rem, 1fr) max-content minMax(1.5rem, 1fr);
  &.with-arrow-children {
    grid-template-areas:
      '.        .    .      .         .'
      'loading  text arrow  children  .'
      '.        .    .      .         .';
    grid-template-columns: minMax(1.5rem, 1fr) max-content ${arrowAreaWidth} auto minMax(
        1.5rem,
        1fr
      );
  }
  &.with-arrow {
    grid-template-areas:
      '.        .    .      .'
      'loading  text arrow  .'
      '.        .    .      .';
    grid-template-columns: minMax(1.5rem, 1fr) max-content ${arrowAreaWidth} minMax(
        1.5rem,
        1fr
      );
  }
  &.with-children {
    grid-template-areas:
      '.        .    .      .'
      'loading  text children  .'
      '.        .    .      .';
    grid-template-columns: minMax(1.5rem, 1fr) max-content auto minMax(
        1.5rem,
        1fr
      );
  }
  grid-template-rows: 2.3rem auto 2.3rem;
  align-content: center;
  text-align: center;
  align-items: center;
  column-gap: 1.5rem;

  cursor: pointer;
  height: 8.1rem;
  border-radius: ${({ borderRadius = '0.5rem' }) => borderRadius};
  border: ${({ border = 'none' }) => border};
  min-width: ${({ minWidth = defaultMinWidth }) => minWidth};
  transition: all 0.4s;
  overflow: hidden;
  white-space: nowrap;

  .text {
    grid-area: text;
    cursor: pointer;
  }

  .no-select {
    cursor: pointer;
    user-select: none;
  }

  .arrow {
    grid-area: arrow;
    display: grid;
    cursor: pointer;
    justify-content: stretch;
    justify-items: start;
    width: ${arrowWidth};
    .arrow-svg {
      width: 100%;
      height: auto;
    }
  }

  svg {
    width: 100%;
    path {
    }
  }

  .submitting-progress {
    height: 1rem;
  }

  .no-wrap {
    white-space: nowrap;
  }

  &:hover {
  }

  &:focus {
  }

  &:disabled {
    cursor: default;
    &:hover {
      cursor: not-allowed;
    }

    & * {
      cursor: not-allowed;
    }
  }

  &:focus:enabled {
    outline: none;
  }

  &.btn::after {
    z-index: -1;
    /* transition: all 0.4s; */
  }

  &:active:enabled {
  }

  .loading {
    grid-area: loading;
    padding: 1rem;
    .spinning {
    }
  }
`;
