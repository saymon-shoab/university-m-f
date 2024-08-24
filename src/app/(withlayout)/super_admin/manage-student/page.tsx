'use client'

import { getUserInfo } from "@/service/auth.service"
import UMBreadCrumb from "@/components/ui/UMBreadCrumb"
import Link from "next/link";
import { Button } from "antd";
const ManageStudentPage = () => { 
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `${role}`
          }
        ]}
      />

      <h1> manage student page</h1>
      <Link href={"/super_admin/manage-student/create"}>
        <Button>Create Student</Button>
      </Link>
    </div>
  )
}

export default ManageStudentPage
