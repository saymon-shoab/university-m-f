'use client'

import { getUserInfo } from "@/service/auth.service"
import UMBreadCrumb from "@/components/ui/UMBreadCrumb"
import Link from "next/link";
import { Button } from "antd";
import ActionBar from '@/components/ActionBar/ActionBar'

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

      <ActionBar title= "manage student page">
      <Link href={"/super_admin/manage-student/create"}>
        <Button>Create Student</Button>
      </Link>
      </ActionBar>
  
    </div>
  )
}

export default ManageStudentPage
