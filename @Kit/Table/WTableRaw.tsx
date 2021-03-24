/* eslint-disable @typescript-eslint/no-explicit-any */
import Table from 'rc-table';
import { ColumnsType, GetRowKey } from 'rc-table/lib/interface';
import React, { useMemo } from 'react';
import '../../@extensions/string-extensions';
import { IIndexer } from '../../contracts';
import { guardString } from '../../guards';
import { WButton } from '../Buttons';
import { cellRenderStrategy } from './cell';
import { IWTableProps } from './contracts';

export const WTabledRaw = <T extends IIndexer<T>>({
  columns,
  data,
  rowClassName,
  prefixCls,
  rowKey,
  onRowChange,
  onRowAdd,
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
        const { title, dataKey, justify, key, render, ...c } = column;
        // if renderType & render = null set rendering like we do in squad.
        const rendering = cellRenderStrategy(column, render, onRowChange);

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
