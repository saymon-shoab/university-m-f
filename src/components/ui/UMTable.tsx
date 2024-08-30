"use client";
import { Table } from "antd";

type ITablePropsType = {
  columns?: any;
  dataSource?: any;
  loading?: boolean;
  pageSize?: number;
  total?: number;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
  showPagination?: boolean;
};

const UMTable = ({
  columns,
  dataSource,
  loading,
  pageSize,
  total,
  showSizeChanger,
  onPaginationChange,
  onTableChange,
  showPagination= true,
}: ITablePropsType) => {
  const paginationConfig = showPagination?{
    pageSize: pageSize,
    total: total,
    pageSizeOptions: [5, 10,2],
    showSizeChanger: showSizeChanger,
    onChange: onPaginationChange,
  }: false;

  return (
    <>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={paginationConfig}
        onChange={onTableChange}
      />
    </>
  );
};

export default UMTable;
