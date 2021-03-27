import React from 'react';
import { SchemaOf } from 'yup';
import { TableColumnType } from '..';
import { IIndexer } from '../../../contracts';
import { IWTableColumn, RowChangeEvent } from '../contracts';
import { CellText, CellTextInput } from './components';

/**
 * represent table's column items selection
 */
export const cellRenderStrategy = <T extends IIndexer<T>>(
  column: IWTableColumn<T>,
  render: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ((value: any, record: T, index: number) => React.ReactNode) | undefined,
  onRowChange?: RowChangeEvent<T>,
  schema?: SchemaOf<T>
) => {
  const { renderType } = column;
  if (render || !renderType) return render;
  if (renderType === TableColumnType.text) {
    return CellText;
  }
  if (renderType === TableColumnType.editableText) {
    const res = CellTextInput<T>(column, onRowChange, schema);
    return res;
  }
  console.log('## ', { onRowChange, schema });

  throw Error(`Column type [${renderType}] is not recognized`);
};
