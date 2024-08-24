'use client'

import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import { getUserInfo } from '@/service/auth.service'
import { Button } from 'antd'
import Link from 'next/link'
import ActionBar from '@/components/ActionBar/ActionBar'


const Department = () => {
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

    <ActionBar title="Manage Faculty page">
      <Link href={"/super_admin/department/create"}>
          <Button>Create Student</Button>
      </Link>
    </ActionBar>
   
    
    </div>
  )
}

export default Department
