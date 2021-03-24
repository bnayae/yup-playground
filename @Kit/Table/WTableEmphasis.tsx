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
    background: ${({ theme }) => theme.pallette.color10};
    color: ${({ theme }) => theme.pallette.color21};

    .rc-table-cell {
      border-color: white;
      border-width: 0 1rem;
      border-style: solid;
    }
  }

  .rc-table-tbody {
    border: 0.1rem solid ${({ theme }) => theme.pallette.color22};
  }

  .add-row-btn {
    background: ${({ theme }) => theme.pallette.color10};
    border: none;

    .text {
      color: ${({ theme }) => theme.pallette.color21};
      &:hover {
        color: ${({ theme }) => theme.pallette.color31};
      }
    }
  }

  /* .even-row {
    background: ${({ theme }) => theme.pallette.color20};
  }

  .odd-row {
    background: ${({ theme }) => theme.pallette.color21};
  } */
` as any;
