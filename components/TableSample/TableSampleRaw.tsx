import React from 'react';
import { WTable } from '../../@Kit';
import {
  ColumnJustifyContent,
  IWTableColumn,
  TableColumnType,
} from '../../@Kit/Table';
import { IWithClassName } from '../../contracts';
import { IPerson } from '../../contracts/types';
import { Gender } from '../../contracts/types/Gender';

const dataSource: IPerson[] = [
  {
    nickName: 'bnaya eshet',
    email: 'bnaya@mail.com',
    // email: '',

    givenName: 'bnaya',
    surName: 'eshet',

    gender: Gender.male,
    birthDate: new Date('1980-03-20T10:30:09'),
    score: 21,
  },
  {
    nickName: 'itai reshef',
    email: 'itai@mail.com',
    // email: '',

    givenName: 'itai',
    surName: 'reshef',

    gender: Gender.male,
    birthDate: new Date('1954-03-20T10:30:09'),
    score: 30,
  },
  {
    nickName: 'nadav ofir',
    email: 'someone@gmail.com',
    // email: '',

    givenName: 'nadav',
    surName: 'ofir',

    gender: Gender.male,
    birthDate: new Date('1982-03-20T10:30:09'),
    score: 14,
  },
];

export const TableSampleRaw = ({ className }: IWithClassName) => {
  const columns: IWTableColumn<IPerson>[] = [
    {
      dataKey: 'nickName',
      justify: ColumnJustifyContent.center,
      renderType: TableColumnType.editableText,
    },
    {
      dataKey: 'email',
      className: 'country',
      renderType: TableColumnType.editableText,
    },
    {
      dataKey: 'gender',
      renderType: TableColumnType.editableText,
    },
    {
      dataKey: 'score',
      renderType: TableColumnType.editableText,
    },
  ];

  return (
    <div className={className}>
      <WTable<IPerson>
        className="content"
        data={dataSource}
        columns={columns}
        rowKey="email"
      />
      {/* <div className="summary">
        <JSONPretty data={validation?.errors} />
        <JSONPretty data={validation} />
      </div> */}
    </div>
  );
};
