'use client'
import Forms from '@/components/Forms/Form';
import FormDatePicker from '@/components/Forms/FormDatePicker';
import FormInput from '@/components/Forms/FormInput';
import FormSelectField from '@/components/Forms/FormSelectField';
import FormTextArea from '@/components/Forms/FormTextArea';
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import UploadImage from '@/components/ui/Uploadimage';
import { bloodGroupOptions, departmentOptions, genderOptions } from '@/constants/global';
import { adminSchema } from '@/schemas/admin';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Row } from 'antd';
import React from 'react'
type IDProps = {
    params: any;
}

const EditAdminPage = ({params}:IDProps) => {
    const {id} = params;
    console.log(id);
    const adminInformation = [
        {
          type: "text",
          name: "admin.name.firstName",
          size: "large",
          label: "First Name",
        },
        {
          type: "text",
          name: "admin.name.middleName",
          size: "large",
          label: "Mid Name",
        },
        ,
        {
          type: "text",
          name: "admin.name.lastName",
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
          size: "large",
          name: "admin.gender",
          options: genderOptions,
          label: "Gender",
          placeholder: "Select",
          type: "select",
        },
        {
          size: "large",
          name: "admin.managementDepartment",
          options: departmentOptions,
          label: "Department",
          placeholder: "Select",
          type: "select",
        },
        {
          type: "file",
          name: "file",
        },
      ];
    
      const basicInformation = [
        {
          type: "email",
          name: "admin.email",
          size: "large",
          label: "Email address",
        },
        {
          type: "text",
          name: "admin.contactNo",
          size: "large",
          label: "Contact No.",
        },
        {
          type: "text",
          name: "admin.emergencyContactNo",
          size: "large",
          label: "Emergency Contact No.",
        },
        {
          type: "date",
          name: "admin.dateOfBirth",
          label: "Date of birth",
          size: "large",
        },
        {
          type: "select",
          size: "large",
          name: "admin.bloodGroup",
          options: bloodGroupOptions,
          label: "Blood group",
          placeholder: "Select",
        },
        {
          type: "text",
          name: "admin.designation",
          size: "large",
          label: "Designation",
        },
        {
          type: "textArea",
          name: "admin.presentAddress",
          label: "Present address",
          rows: 4,
        },
        {
          type: "textArea",
          name: "admin.permanentAddress",
          label: "Parmanent address",
          rows: 4,
        },
      ];
    const onSubmit = (value:any) =>{
        console.log(value);
    }
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
    <h1>Edit Admin</h1>

    <div>
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
            {adminInformation?.map((item: any) => {
              return (
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  {item.type === "text" || item.type === "password" ? (
                    <FormInput
                      type={item.type}
                      name={item.name}
                      size={item.size}
                      label={item.label}
                    />
                  ) : item.type === "select" ? (
                    <FormSelectField
                      size={item.size}
                      name={item.name}
                      options={item?.options}
                      label={item.label}
                      placeholder={item?.placeholder}
                    />
                  ) : item.type === "file" ? (
                    <UploadImage name="file" />
                  ) : (
                    <></>
                  )}
                </Col>
              );
            })}
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
          Update
        </Button>
      </Forms>
    </div>
  </div>
  )
}

export default EditAdminPage