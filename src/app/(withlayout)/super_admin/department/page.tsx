"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/service/auth.service";
import { Button } from "antd";
import Link from "next/link";
import ActionBar from "@/components/ActionBar/ActionBar";
import UMTable from "@/components/ui/UMTable";
import { useGetDepartmentsQuery } from "@/redux/api/departmentApi";
import { useState } from "react";
import { DeleteOutlined, EditOutlined , EyeOutlined} from "@ant-design/icons";
const columns = [
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    sorter: true,
  },
  {
    title: "Action",
    render: function (data: any) {
      return (
        <>
          <Button onClick={() => console.log(data)} type="primary">
          <EyeOutlined />
          </Button>
          <Button style={{margin:"0px 10px"}} onClick={() => console.log(data)} type="primary">
            <EditOutlined />
          </Button>
          <Button onClick={() => console.log(data)} type="primary" danger>
            <DeleteOutlined />
          </Button>
        </>
      );
    },
  },
];

const ManageDepartment = () => {
  const { role } = getUserInfo() as any;
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const { data, isLoading } = useGetDepartmentsQuery({ ...query });
  // @ts-ignore
  const departments = data?.departments;
  const meta = data?.meta;

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { field, order } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `${role}`,
          },
        ]}
      />

      <ActionBar title="Department List">
        <Link href={"/super_admin/department/create"}>
          <Button type="primary">Create</Button>
        </Link>
      </ActionBar>
      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={departments}
        pageSize={size}
        total={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ManageDepartment;
