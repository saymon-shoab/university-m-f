"use client";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import Forms from "@/components/Forms/Form";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/Uploadimage";
import {
  acDepartmentOptions,
  acSemesterOptions,
  bloodGroupOptions,
  departmentOptions,
  facultyOptions,
  genderOptions,
} from "@/constants/global";
import { getUserInfo } from "@/service/auth.service";
import { Button, Col, Row } from "antd";
import Link from "next/link";
import React from "react";

const createFacultyPage = () => {
  const facultyInformation = [
    {
      type: "text",
      name: "faculty.name.firstName",
      size: "large",
      label: "First Name",
    },
    {
      type: "text",
      name: "faculty.name.middleName",
      size: "large",
      label: "Mid Name",
    },
    ,
    {
      type: "text",
      name: "faculty.name.lastName",
      size: "large",
      label: "Last Name",
    },
    {
      type: "password",
      name: "password",
      size: "large",
      label: "Password",
    },
    {
      type: "select",
      size: "large",
      name: "faculty.gender",
      options: genderOptions,
      label: "Gender",
      placeholder: "Select",
    },
    {
      type: "select",
      name: "faculty.academicFaculty",
      options: facultyOptions,
      size: "large",
      label: "Academic Faculry",
      placeholder: "Select",
    },
    {
      type: "select",
      name: "faculty.academicDepartment",
      options: acDepartmentOptions,
      size: "large",
      label: "Academic Faculry",
      placeholder: "Select",
    },
    {
      type: "file",
      name: "file",
    },
  ];
  const basicInformation = [
    {
      type: "email",
      name: "faculty.email",
      size: "large",
      label: "Email address",
    },
    {
      type: "text",
      name: "faculty.contactNo",
      size: "large",
      label: "Contact No.",
    },
    {
      type: "text",
      name: "faculty.emergencyContactNo",
      size: "large",
      label: "Emergency Contact No.",
    },
    {
      type: "date",
      name: "faculty.dateOfBirth",
      label: "Date of birth",
      size: "large",
    },
    {
      type: "select",
      size: "large",
      name: "faculty.bloodGroup",
      options: bloodGroupOptions,
      label: "Blood group",
      placeholder: "Select",
    },
    {
      type: "text",
      name: "faculty.designation",
      size: "large",
      label: "Designation",
    },
    {
      type: "textArea",
      name: "faculty.presentAddress",
      label: "Present address",
      rows: 4,
    },
    {
      type: "textArea",
      name: "faculty.permanentAddress",
      label: "Parmanent address",
      rows: 4,
    },
  ]
  const onSubmit = async (data: any) => {
    try {
      // const res = await
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `${role}`,
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
            {
              facultyInformation.map((item:any)=>{
                return (
                  <Col
                  className="gutter-row"
                  style={{
                    marginBottom: "10px",
                  }}
                  span={6}
                >
                  {
                    item.type === "select" ?   <FormSelectField
                    name={item.name}
                    options={item.options}
                    size={item.size}
                    label={item.label}
                    placeholder={item.placeholder}
                  />: item.type ==="file"? <UploadImage name={item.file} />: <FormInput
                  name={item.name}
                  type={item.type}
                  size={item.size}
                  label={item.label}
                  />
                  }
                </Col>
                )
              })
            }
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
          {basicInformation.map((item: any) => {
                return (
                  <Col
                    className="gutter-row"
                    span={8}
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    {item.type === "select" ? (
                      <FormSelectField
                        size={item.size}
                        name={item.name}
                        options={item.options}
                        label={item.label}
                        placeholder={item.select}
                      />
                    ) : item.type === "date" ? (
                      <FormDatePicker
                        name={item.name}
                        label={item.label}
                        size={item.size}
                      />
                    ) : item.type === "textArea" ? (
                      <FormTextArea
                        name={item.name}
                        label={item.label}
                        rows={item.rows}
                      />
                    ) : (
                      <FormInput
                        name={item.name}
                        type={item.type}
                        size={item.size}
                        label={item.label}
                      />
                    )}
                  </Col>
                );
              })}
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
