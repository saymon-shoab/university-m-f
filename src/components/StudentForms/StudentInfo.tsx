import { Row, Col } from "antd"
import UploadImage from "../ui/Uploadimage"
import FormSelectField from "../Forms/FormSelectField"
import FormInput from "../Forms/FormInput"
import { facultyOptions, genderOptions, acDepartmentOptions, acSemesterOptions } from "@/constants/global"


const StudentInfo = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
        marginTop: '10px'
      }}
    >

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
          <FormSelectField name='student.academicDepartment' options={acDepartmentOptions} size="large" label="Academic Department" placeholder="Select" />
        </Col>
        <Col className="gutter-row" style={{
          marginBottom: "10px",
        }} span={8}>
          <FormSelectField name='student.academicFaculty' options={facultyOptions} size="large" label="Academic AcademicFaculry" placeholder="Select" />
        </Col>
        <Col className="gutter-row" style={{
          marginBottom: "10px",
        }} span={8}>
          <FormSelectField name='student.academicSemester' options={acSemesterOptions} size="large" label="Academic Semester" placeholder="Select" />
        </Col>
        <Col className="gutter-row" style={{
          marginBottom: "10px",
        }} span={8}>
          <FormSelectField name='student.gender' options={genderOptions} size="large" label="Gender" placeholder="Select" />

        </Col>
        <Col className="gutter-row" style={{
          marginBottom: "10px",
        }} span={8}>
          <UploadImage />
        </Col>
      </Row>
    </div>
  )
}

export default StudentInfo;
