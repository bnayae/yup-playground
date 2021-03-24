import React from 'react';
import { TableColumnType } from '..';
import { IIndexer } from '../../../contracts';
import { IWTableColumn, RowChangeEvent } from '../contracts';
import { CellText, CellTextInput } from './components';

/**
 * represent squad items selection
 */
export const cellRenderStrategy = <T extends IIndexer<T>>(
  column: IWTableColumn<T>,
  render: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ((value: any, record: T, index: number) => React.ReactNode) | undefined,
  onRowChange?: RowChangeEvent<T>
) => {
  const { renderType } = column;
  if (render || !renderType) return render;
  if (renderType === TableColumnType.text) {
    return CellText;
  }
  if (renderType === TableColumnType.editableText) {
    return CellTextInput(column, onRowChange);
  }

  throw Error(`Column type [${renderType}] is not recognized`);
};
