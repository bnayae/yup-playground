/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from 'react';
import styled from 'styled-components';
import { IIndexer } from '../../contracts';
import { IWTableProps } from './contracts/IWTableProps';
import { WTabledRaw } from './WTableRaw';

const borderSize = '0.1rem';
const buttonBorderSize = '0.1rem';

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
    /* border: ${borderSize} solid ${({ theme }) => theme.pallette.color22}; */
    padding: 0 1rem;
    .MuiFormControl-marginDense {
      margin-top: 0rem;
      margin-bottom: 0rem;
    }
  }

  .rc-table-tbody {
    /* border: ${borderSize} solid ${({ theme }) => theme.pallette.color22}; */
  }

  .rc-table-thead {
    font: ${({ theme }) => theme.fonts.f4};

    color: ${({ theme }) => theme.pallette.color31};
    border: ${borderSize} solid ${({ theme }) => theme.pallette.color22};

    .rc-table-cell {
      padding: 2rem;

      .MuiFormControl-marginDense {
        margin-top: 0rem;
        margin-bottom: 0rem;
      }
    }
  }

  .add-row-btn {
    border: ${buttonBorderSize} solid ${({ theme }) => theme.pallette.color22};
    justify-self: stretch;
    background: ${({ theme }) => theme.pallette.color21};
    margin: 0 1.6rem;
    height: 6rem;

    .text {
      font-size: 6rem;
      font-weight: 400;
      color: ${({ theme }) => theme.pallette.color10};
      &:hover {
        color: ${({ theme }) => theme.pallette.color31};
      }
    }

    &:focus {
      box-shadow: none;
    }
  }

  .row {
    height: 9rem;
  }

  /* .even-row {
    background: ${({ theme }) => theme.pallette.color20};
  }

  .odd-row {
    background: ${({ theme }) => theme.pallette.color21};
  } */
` as any;
