/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from 'react';
import styled from 'styled-components';
import { IIndexer } from '../../contracts';
import { IWTableProps } from './contracts/IWTableProps';
import { WTableBase } from './WTableBase';

export const WTableEmphasis: new <T extends IIndexer<T>>() => Component<
  IWTableProps<T>
> = styled(WTableBase)`
  display: grid;
  justify-content: center;

  .rc-table-thead {
    .rc-table-cell {
      border-color: white;
      border-width: 0 1rem;
      border-style: solid;
    }
  }

  .rc-table-tbody {
  }

  .add-row-btn {
    border: none;

    .text {
      &:hover {
      }
    }
  }

  /* .even-row {

  }

  .odd-row {

  } */
` as any;
