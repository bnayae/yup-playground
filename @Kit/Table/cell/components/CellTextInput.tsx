import React from 'react';
import { SchemaOf } from 'yup';
import { IIndexer } from '../../../../contracts';
import { WTextInput } from '../../../TextInput';
import { IWTableColumn, RowChangeEvent } from '../../contracts';

export const CellTextInput = <T extends IIndexer<T>>(
  column: IWTableColumn<T>,
  onRowChange?: RowChangeEvent<T>,
  schema?: SchemaOf<T>
) => (value: string, _record: T, index: number) => {
  // todo: [bnaya 2021-03] handle validation
  console.log('## schema', schema);

  return (
    <WTextInput
      value={value}
      margin="dense"
      // editableBehavior={
      //   value ? EditableBehavior.onFocus : EditableBehavior.always
      // }
      onChange={({ target }) => {
        const { value: inputValue } = target;
        if (onRowChange) onRowChange(inputValue, column.dataKey, index);
      }}
    />
  );
};
