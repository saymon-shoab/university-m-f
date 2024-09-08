
"use client"
import SteperForm from "@/components/SteperFrom/SteperForm"
import StudentInfo from "@/components/StudentForms/StudentInfo"
import StudentBasicInfo from "@/components/StudentForms/StudentBasicInfo"
import GurdianInfo from "@/components/StudentForms/GurdianInfo"
import LocalGurdianInfo from "@/components/StudentForms/LocalGurdianInfo"
import { message } from "antd"
import { useAddStudentWithFormDataMutation } from "@/redux/api/studentApi"
import UMBreadCrumb from "@/components/ui/UMBreadCrumb"


const steps = [
  {
    title: 'Student Information',
    content: <StudentInfo />,
  },
  {
    title: 'Basic Information',
    content: <StudentBasicInfo />,
  },
  {
    title: 'Gurdian Information',
    content: <GurdianInfo/>,
  },
  {
    title: 'Local Gurdian Information',
    content: <LocalGurdianInfo/>,
  },
];


const CreateStudentPage = () => {
const [addStudentWithFormData] = useAddStudentWithFormDataMutation()
const handleSubmitStudent = async (values: any)=>{
  const obj = {...values}
  const file = obj["file"]
  delete obj["file"]
  const data = JSON.stringify(obj)
  const formData = new FormData()
  formData.append("file", file as Blob)
  formData.append("data", data)
  message.loading("creating...")
  try{
    const res = await addStudentWithFormData(formData)
    if (!!res) {
      message.success("create student done...")
    }
  }catch(err:any){
    message.error(err)
  }
}
const base = "admin";

  return (
    <div>
          <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "manage-student", link: `/${base}/manage-student` },
        ]}
      />
      <h1>Create Student </h1>
      <SteperForm 
      parsistKey="student-create-form"
      submitHandler={(value)=>{handleSubmitStudent(value)}} 
      steps={steps}/>
    </div>
  )
}

export default CreateStudentPage
