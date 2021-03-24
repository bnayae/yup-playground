/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from 'react';
import styled from 'styled-components';
import { IIndexer } from '../../contracts';
import { IWTableProps } from './contracts/IWTableProps';
import { WTableBase } from './WTableBase';

export const WTable: new <T extends IIndexer<T>>() => Component<
  IWTableProps<T>
> = styled(WTableBase)`
  display: grid;
  justify-content: center;
` as any;
