'use client'
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import Forms from "@/components/Forms/Forms";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/Uploadimage";
import { acDepartmentOptions, acSemesterOptions, bloodGroupOptions, departmentOptions, facultyOptions, genderOptions } from "@/constants/global";
import { getUserInfo } from "@/service/auth.service";
import { Button, Col, Row } from "antd";
import Link from "next/link";
import React from "react";

const createFacultyPage = () => {

  const onSubmit= async (data: any) => {
    try {
      // const res = await
      console.log(data)

    } catch (err) {
      console.error(err)
    }
  }

  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${ role }`,
            link: `${ role }`,
          },
          {
            label: "manage-faculty",
            link: "/manage-faculty",
          },
        ]}
      />
      <h1>Create faculty</h1>
      <Forms submitHandler={onSubmit}>
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
            Faculty Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" style={{
          marginBottom: "10px",
        }} span={6}>
          <FormInput name='student.name.firstName' type="text" size="large" label="First Name" />
        </Col>
        <Col className="gutter-row" style={{
          marginBottom: "10px",
        }} span={6}>
          <FormInput name='student.name.midName' type="text" size="large" label="Mid Name" />
        </Col>
        <Col className="gutter-row" style={{
          marginBottom: "10px",
        }} span={6}>
          <FormInput name='student.name.lastName' type="text" size="large" label="Last Name" />
        </Col>
        <Col className="gutter-row" style={{
          marginBottom: "10px",
        }} span={6}>
          <FormInput name='password' type="password" size="large" label="Password" />
        </Col>
        <Col className="gutter-row" style={{
          marginBottom: "10px",
        }} span={8}>
          <FormSelectField name='student.gender' options={genderOptions} size="large" label="Gender" placeholder="Select" />
        </Col>
        <Col className="gutter-row" style={{
          marginBottom: "10px",
        }} span={8}>
          <FormSelectField name='student.academicFaculty' options={facultyOptions} size="large" label="Academic Faculry" placeholder="Select" />
        </Col>
        <Col className="gutter-row" style={{
          marginBottom: "10px",
        }} span={8}>
          <FormSelectField name='student.academicDepartment' options={acDepartmentOptions} size="large" label="Academic Department" placeholder="Select" />
        </Col>
   
     
        <Col className="gutter-row" style={{
          marginBottom: "10px",
        }} span={8}>
          <UploadImage />
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
            <Col className="gutter-row" style={{
              marginBottom: "10px",
            }} span={8}>
              <FormInput name='admin.email' type="email" size="large" label="Email" />
            </Col>
            <Col className="gutter-row" style={{
              marginBottom: "10px",
            }} span={8}>
              <FormInput name='admin.ContactNo' type="number" size="large" label="Contant Number" />
            </Col>
            <Col className="gutter-row" style={{
              marginBottom: "10px",
            }} span={8}>
              <FormInput name='admin.emergencyContactNo' type="number" size="large" label="Emargency Contact Number" />
            </Col>
            <Col className="gutter-row" style={{
              marginBottom: "10px",
            }} span={8}>
              <FormDatePicker name="admin.dateOfBirth" label="Date Of Barth"/>
            </Col>
            <Col className="gutter-row" style={{
              marginBottom: "10px",
            }} span={8}>
              <FormSelectField name='admin.bloodGroup' options={bloodGroupOptions} size="large" label="Blood Group" placeholder="Select" />
            </Col>
            <Col className="gutter-row" style={{
              marginBottom: "10px",
            }} span={8}>
              <FormInput name='admin.designation' type="text"  size="large" label="Designation" />
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

export default createFacultyPage;
