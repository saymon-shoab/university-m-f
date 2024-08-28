'use client'
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/service/auth.service";
import { Button } from "antd";
import Link from "next/link";
import ActionBar from "@/components/ActionBar/ActionBar";
import React from "react";

const ManageFacultyPage = () => {
  const { role } = getUserInfo() as any;
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

      <ActionBar title=" Faculty List">
        <Link href={"/super_admin/manage-faculty/create"}>
          <Button type="primary">Create Faculty</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageFacultyPage;
