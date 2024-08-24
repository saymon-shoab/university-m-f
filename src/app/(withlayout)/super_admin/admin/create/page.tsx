'use client'

import Forms from '@/components/Forms/Forms'
import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'
import { Col , Row } from 'antd';
import FormInput from '@/components/Forms/FormInput'


type FormValues = {
  id: string;
  password: string
}



const createAdminPage = () => {
  const onSubmit: SubmitHandler<FormValues> = async(data) => {
    try{
      // const res = await
    
    }catch(err){
      console.error(err)
    }
  }
  return (
    <div>
      <UMBreadCrumb
        items={[
         { label: 'super_admin',
          link: '/super_admin'},
          { label: 'admin',
            link: '/super_admin/admin'},
        ]}
      />
      <h1>create admin page</h1>
      <div>
        <Forms submitHandler={onSubmit}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={8}>
             <FormInput name='name' type="text" size="large" label="First Name"/>
          </Col>
          <Col className="gutter-row" span={8}>

          </Col>
          <Col className="gutter-row" span={8}>

          </Col>
        </Row>
        </Forms>
      </div>
    </div>
  )
}

export default createAdminPage
