/* eslint-disable @typescript-eslint/no-explicit-any */
import Table from 'rc-table';
import { ColumnsType, GetRowKey } from 'rc-table/lib/interface';
import React, { useMemo } from 'react';
import '../../@extensions/string-extensions';
import { IIndexer } from '../../contracts';
import { guardString } from '../../guards';
import { WButton } from '../Buttons';
import { CellText, CellTextInput } from './cell/components';
import { IWTableProps, TableColumnType } from './contracts';

export const WTabledRaw = <T extends IIndexer<T>>({
  columns,
  data,
  rowClassName,
  prefixCls,
  rowKey,
  onRowChange,
  onRowAdd,
  schema,
  className,
  ...props
}: IWTableProps<T>) => {
  const prefix = prefixCls ? `${prefixCls}-` : '';
  const rowStrategy =
    rowClassName ??
    ((_, i) => `${prefix}row ${prefix}${i % 2 === 0 ? 'even-row' : 'odd-row'}`);

  const allColumns = columns ?? [];

  const mappedColumns: ColumnsType<T> | undefined = useMemo(
    () =>
      allColumns?.map((column) => {
        const {
          title,
          dataKey,
          justify,
          key,
          render,
          renderType,
          ...c
        } = column;
        // if renderType & render = null set rendering like we do in squad.
        let rendering = render;
        // cellRenderStrategy(
        //   column,
        //   render,
        //   onRowChange,
        //   schema
        // );
        if (renderType === TableColumnType.text) {
          rendering = CellText;
        }
        if (renderType === TableColumnType.editableText) {
          const res = CellTextInput<T>(column, onRowChange, schema);
          rendering = res;
        }

        const keyOfData: string | number | undefined = guardString(dataKey)
          ? dataKey
          : (dataKey as number);

        const caption = title;

        return {
          ...c,
          dataIndex: keyOfData,
          key: key ?? keyOfData,
          title: caption,
          align: justify,
          render: rendering,
        };
      }),
    [allColumns]
  );

  return (
    <div className={className}>
      <Table<T>
        className="table-view"
        columns={mappedColumns}
        data={data}
        prefixCls={prefixCls}
        rowClassName={rowStrategy}
        rowKey={
          guardString(rowKey)
            ? rowKey
            : (rowKey as GetRowKey<T>) ?? ((_, i) => `row ${i}`)
        }
        {...props}
      />
      {onRowAdd && (
        <WButton
          {...props}
          onClick={onRowAdd}
          className="add-row-btn"
          title="+"
          // title={t('add-btn')}
        />
      )}
    </div>
  );
};
