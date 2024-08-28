'use client'
import FormInput from '@/components/Forms/FormInput'
import Forms from '@/components/Forms/Forms'
import { Button, Col, Row } from 'antd'
import React from 'react'

const page = () => {
  const onSubmit =(data:any)=> {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Row  style={{  }}>
  

    <Col sm={12} md={6} lg={8}>
      <h1 style={{ margin: "15px 0px " }} >Create Department</h1>
      <div>
        <Forms submitHandler={onSubmit}>
          <div style={{ margin: "15px 0px " }}>
            <FormInput name='id' type='text' size='large' label='User Id' />
          </div>
          <Button type="primary" htmlType="submit">Login</Button>
        </Forms>
      </div>
    </Col>
  </Row>
  )
}

export default page
