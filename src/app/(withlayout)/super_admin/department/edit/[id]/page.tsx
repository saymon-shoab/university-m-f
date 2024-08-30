"use client"

import ActionBar from '@/components/ActionBar/ActionBar';
import FormInput from '@/components/Forms/FormInput';
import Forms from '@/components/Forms/Forms';
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { useDepartmentQuery, useUpdateDepartmentMutation } from '@/redux/api/departmentApi';
import { getUserInfo } from '@/service/auth.service';
import { Button, Col, message, Row } from 'antd';
import React from 'react'

type IDProps = {
    params: any;
}

const EditDepartmentPage = ({params}: IDProps) => {
    const {id} = params
  const { role } = getUserInfo() as any;
  const {data, isLoading} = useDepartmentQuery(id)
  const [updateDepartment] = useUpdateDepartmentMutation()

  const defaultValues = {
    title: data?.title || "",
  }

    const onSubmit = async (values: {title:string}) => {
      message.loading("updateing....");
      try {
        const p = {id, body: values}
        console.log("p",p);
        await updateDepartment({id, body: values})
        message.success("Department updated successfully");
      } catch (err: any) {
        console.log(err);
        message.error(err.message);
      }
    };
  return (
    <div>
         <UMBreadCrumb
        items={[
          {
            label: `super_admin`,
            link: `super_admin`,
          },
          {
            label: `department`,
            link: `/${role}/department`,
          },
        ]}
      />
      <ActionBar title="Edit Department"></ActionBar>
      <Row style={{}}>
      <Col sm={12} md={6} lg={8}>
        <div>
          <Forms submitHandler={onSubmit} defaultValues={defaultValues}>
            <div style={{ margin: "15px 0px " }}>
              <FormInput name="title" size="large" label="Title"   />
            </div>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Forms>
        </div>
      </Col>
    </Row>
    </div>
  )
}

export default EditDepartmentPage