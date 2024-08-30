"use client";
import Forms from "@/components/Forms/Forms";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import React from "react";
import { SubmitHandler } from "react-hook-form";
import { Col, Row, Button } from "antd";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import {
  genderOptions,
  bloodGroupOptions,
} from "@/constants/global";
import UploadImage from "@/components/ui/Uploadimage";
import FormTextArea from "@/components/Forms/FormTextArea";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminSchema } from "@/schemas/admin";
import { useGetDepartmentsQuery } from "@/redux/api/departmentApi";
import { IDepartment } from "@/types";


const createAdminPage = () => {
  const query: Record<string, any> = {limit:100, page:1};

  const { data, isLoading } = useGetDepartmentsQuery({limit:100, page:1});
  //@ts-ignore
  const departments:IDepartment[] =data?.departments ? data?.departments : []
  const departmentOptions = departments.map(item=>{
    return {
      label: item?.title,
      value: item?.id
    }
  })
  const onSubmit = async (data: any) => {
    try {
      // const res = await
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "admin",
            link: "/super_admin/admin",
          },
        ]}
      />
      <h1>Create Admin</h1>

      <Forms submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            Admin Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              style={{
                marginBottom: "10px",
              }}
              span={8}
            >
              <FormInput
                name="admin.name.firstName"
                type="text"
                size="large"
                label="First Name"
              />
            </Col>
            <Col
              className="gutter-row"
              style={{
                marginBottom: "10px",
              }}
              span={8}
            >
              <FormInput
                name="admin.name.middleName"
                type="text"
                size="large"
                label="Mid Name"
              />
            </Col>
            <Col
              className="gutter-row"
              style={{
                marginBottom: "10px",
              }}
              span={8}
            >
              <FormInput
                name="admin.name.lastName"
                type="text"
                size="large"
                label="Last Name"
              />
            </Col>
            <Col
              className="gutter-row"
              style={{
                marginBottom: "10px",
              }}
              span={8}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
              />
            </Col>
            <Col
              className="gutter-row"
              style={{
                marginBottom: "10px",
              }}
              span={8}
            >
              <FormSelectField
                name="admin.gender"
                options={genderOptions}
                size="large"
                label="Gender"
                placeholder="Select"
              />
            </Col>
            <Col
              className="gutter-row"
              style={{
                marginBottom: "10px",
              }}
              span={8}
            >
              <FormSelectField
                name="admin.managementDepartment"
                options={departmentOptions}
                size="large"
                label="Department"
                placeholder="Select"
              />
            </Col>
            <Col
              className="gutter-row"
              style={{
                marginBottom: "10px",
              }}
              span={8}
            >
        
              <UploadImage name="file"/>
            </Col>
          </Row>
        </div>

        {/* basic info */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            Basic Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              style={{
                marginBottom: "10px",
              }}
              span={8}
            >
              <FormInput
                name="admin.email"
                type="email"
                size="large"
                label="Email"
              />
            </Col>
            <Col
              className="gutter-row"
              style={{
                marginBottom: "10px",
              }}
              span={8}
            >
              <FormInput
                name="admin.ContactNo"
                type="number"
                size="large"
                label="Contant Number"
              />
            </Col>
            <Col
              className="gutter-row"
              style={{
                marginBottom: "10px",
              }}
              span={8}
            >
              <FormInput
                name="admin.emergencyContactNo"
                type="number"
                size="large"
                label="Emargency Contact Number"
              />
            </Col>
            <Col
              className="gutter-row"
              style={{
                marginBottom: "10px",
              }}
              span={8}
            >
              <FormDatePicker name="admin.dateOfBirth" label="Date Of Barth" />
            </Col>
            <Col
              className="gutter-row"
              style={{
                marginBottom: "10px",
              }}
              span={8}
            >
              <FormSelectField
                name="admin.bloodGroup"
                options={bloodGroupOptions}
                size="large"
                label="Blood Group"
                placeholder="Select"
              />
            </Col>
            <Col
              className="gutter-row"
              style={{
                marginBottom: "10px",
              }}
              span={8}
            >
              <FormInput
                name="admin.designation"
                type="text"
                size="large"
                label="Designation"
              />
            </Col>
            <Col span={12} style={{ margin: "10px 0" }}>
              <FormTextArea
                name="admin.presentAddress"
                label="Present address"
                rows={4}
              />
            </Col>

            <Col span={12} style={{ margin: "10px 0" }}>
              <FormTextArea
                name="admin.permanentAddress"
                label="Permanent address"
                rows={4}
              />
            </Col>
          </Row>
        </div>
        <Button htmlType="submit" type="primary">
          Create Admin
        </Button>
      </Forms>
    </div>
  );
};

export default createAdminPage;
