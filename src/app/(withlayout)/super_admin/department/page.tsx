"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/service/auth.service";
import { Button, Input, message } from "antd";
import ActionBar from "@/components/ActionBar/ActionBar";
import UMTable from "@/components/ui/UMTable";
import { useGetDepartmentsQuery, useRemoveDepartmentMutation } from "@/redux/api/departmentApi";
import { useState } from "react";
import { DeleteOutlined, EditOutlined , EyeOutlined , ReloadOutlined} from "@ant-design/icons";
import { useDebounced } from "@/redux/hook";
import dayjs, { Dayjs } from "dayjs";
import Link from "next/link";

const ManageDepartment = () => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: function(data:any){
        return data && dayjs(data).format("MMM D, YYYY hh:mm A")
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
           <Link href={`/super_admin/department/edit/${data?.id}`}>
           <Button style={{margin:"0px 10px"}} type="primary">
              <EditOutlined />
            </Button>
           </Link>
          
            <Button onClick={() => handleDelete(data?.id)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];
  
  const { role } = getUserInfo() as any;
  const query: Record<string, any> = {};
  const [removeDepartment] = useRemoveDepartmentMutation()
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("")

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 2000
  })

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;

  }

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
  const handleReset = ()=> {
    setSortBy("")
    setSearchTerm("")
    setSortOrder("")
  }

  const handleDelete = async (id: string) => {
    message.loading("deleting....");
    try {
      await removeDepartment(id)
    
      message.success("Department deleted successfully");
    } catch (err: any) {
      console.log(err);
      message.error(err.message);
    }
  }

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
        <Input style={{width:"20%"}} type="text" size="large" value={searchTerm}  placeholder="Search...." onChange={(e)=> setSearchTerm(e.target.value)}/>
        <div>
        <Link href={"/super_admin/department/create"}>
          <Button type="primary">Create</Button>
        </Link>
        {(!!sortBy || !!sortOrder || !!searchTerm) && (
          <Button type="primary" style={{margin: '0px 5px'}} onClick={handleReset}>
            <ReloadOutlined />
          </Button>
        )}
        </div>
     
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
