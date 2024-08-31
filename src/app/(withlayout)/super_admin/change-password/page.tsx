'use client'
import FormInput from '@/components/Forms/FormInput'
import Forms from '@/components/Forms/Form'
import { Button, Col, Row } from 'antd'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'
type FormValues = {
  oldPassword: string;
  newPassword: string
}
const ResetPassword = () => {
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log(data);
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <Row justify="center" align="middle" style={{  }}>
    <Col sm={12} md={6} lg={8}>
      <h1 style={{ margin: "15px 0px " }} >Reset Password</h1>
      <div>
        <Forms submitHandler={onSubmit}>
          <div style={{ margin: "15px 0px " }}>
            <FormInput name='password' type='text' size='large' label='Old Password' />
          </div>
          <div style={{ margin: "15px 0px " }}>
            <FormInput name='password' type='password' size='large' label='New password' />
          </div>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Forms>
      </div>
    </Col>
  </Row>
  )
}

export default ResetPassword
