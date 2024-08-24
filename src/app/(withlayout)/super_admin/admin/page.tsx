'use client'

import ActionBar from '@/components/ActionBar/ActionBar'
import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import { getUserInfo } from '@/service/auth.service'
import { Button } from 'antd'
import Link from 'next/link'

const manageAdmin = () => {
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

    <ActionBar title= "Admin List"></ActionBar>
      <Link href={"/super_admin/admin/create"}>
      <Button type="primary">Create Admin</Button>
      </Link>
    
    </div>
  )
}

export default manageAdmin
