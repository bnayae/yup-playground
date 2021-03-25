/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from 'react';
import styled from 'styled-components';
import { IIndexer } from '../../contracts';
import { IWTableProps } from './contracts/IWTableProps';
import { WTabledRaw } from './WTableRaw';

export const WTableBase: new <T extends IIndexer<T>>() => Component<
  IWTableProps<T>
> = styled(WTabledRaw)`
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  grid-row-gap: 2rem;

  .table-view {
    table-layout: auto;
    /* border-collapse: collapse; */
  }

  .rc-table-cell {
    padding: 0 1rem;
    .MuiFormControl-marginDense {
      margin-top: 0rem;
      margin-bottom: 0rem;
    }
  }

  .rc-table-thead {
    .rc-table-cell {
      padding: 2rem;

      .MuiFormControl-marginDense {
        margin-top: 0rem;
        margin-bottom: 0rem;
      }
    }
  }

  .add-row-btn {
    justify-self: stretch;

    margin: 0 1.6rem;
    height: 6rem;

    .text {
      font-size: 6rem;
      font-weight: 400;
    }

    &:focus {
      box-shadow: none;
    }
  }

  .row {
    height: 9rem;
  }

  /* .even-row {

  }

  .odd-row {

  } */
` as any;
