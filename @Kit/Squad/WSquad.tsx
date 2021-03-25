/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from 'react';
import styled from 'styled-components';
import { ISquadProps } from './props';
import { WSquadRaw } from './WSquadRaw';

/**
 * represent formation of controls
 */
export const WSquad: new <T extends unknown>() => Component<
  ISquadProps<T>
> = styled(WSquadRaw)`
  align-self: center;
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
` as any;
