'use client'

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

    <h1>Manage Faculty page</h1>
      <Link href={"/super_admin/admin/create"}>
        <Button>Create Student</Button>
      </Link>
    
    </div>
  )
}

export default manageAdmin
