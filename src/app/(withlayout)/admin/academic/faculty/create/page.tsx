"use client";
import FormInput from "@/components/Forms/FormInput";
import Forms from "@/components/Forms/Form";
import { useAddDepartmentMutation } from "@/redux/api/departmentApi";
import { Button, Col, message, Row } from "antd";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAddAcademicFacultyMutation } from "@/redux/api/academic/facultyApi";

const CreateACFacultyPage = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();

  const onSubmit = async (data: any) => {
    try {
      message.loading("createing....");
      const res =  await addAcademicFaculty(data);
      if (!!res) {
      message.success("Academic Faculty added successfully");
        
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  const base = "admin";
  return (
    <div>
        <UMBreadCrumb 
         items={[
            { label: `${base}`, link: `/${base}` },
            { label: "academic-faculty", link: `/${base}/academic/faculty` },
          ]}
        />
    <Row style={{}}>
      <Col sm={12} md={6} lg={8}>
        <h1 style={{ margin: "15px 0px " }}>Create Academic Faculty</h1>
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
    </div>

  );
};

export default CreateACFacultyPage;
