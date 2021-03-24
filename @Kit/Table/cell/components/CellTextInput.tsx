import React from 'react';
import { IIndexer } from '../../../../contracts';
import { WTextInput } from '../../../TextInput';
import { IWTableColumn, RowChangeEvent } from '../../contracts';

export const CellTextInput = <T extends IIndexer<T>>(
  column: IWTableColumn<T>,
  onRowChange?: RowChangeEvent<T>
) => (value: string, _record: T, index: number) => (
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
