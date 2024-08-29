"use client";
import FormInput from "@/components/Forms/FormInput";
import Forms from "@/components/Forms/Forms";
import { useAddDepartmentMutation } from "@/redux/api/departmentApi";
import { Button, Col, message, Row } from "antd";
import React from "react";

const createDepartmentPage = () => {
  const [addDepartment] = useAddDepartmentMutation();

  const onSubmit = async (data: any) => {
    message.loading("createing....")
    await addDepartment(data);
    message.success("Department added successfully")
    try {
      console.log(data);
    } catch (err: any) {
      console.log(err);
      message.error(err.message)
    }
  };
  return (
    <Row style={{}}>
      <Col sm={12} md={6} lg={8}>
        <h1 style={{ margin: "15px 0px " }}>Create Department</h1>
        <div>
          <Forms submitHandler={onSubmit}>
            <div style={{ margin: "15px 0px " }}>
              <FormInput name="title" type="text" size="large" label="Title" />
            </div>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Forms>
        </div>
      </Col>
    </Row>
  );
};

export default createDepartmentPage;
