import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import { getUserInfo } from '@/service/auth.service'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

const createFacultyPage = () => {
    const {role} = getUserInfo() as any
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
      <h1>Create faculty page</h1>

      <Link href={"/super_admin/manage-student/create"}>
        <Button>Create Student</Button>
      </Link>
    </div>
  )
}

export default createFacultyPage
