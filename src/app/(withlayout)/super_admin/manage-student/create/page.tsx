
"use client"
import SteperForm from "@/components/SteperFrom/SteperForm"
import StudentInfo from "@/components/StudentForms/StudentInfo"
import StudentBasicInfo from "@/components/StudentForms/StudentBasicInfo"
import GurdianInfo from "@/components/StudentForms/GurdianInfo"
import LocalGurdianInfo from "@/components/StudentForms/LocalGurdianInfo"


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

const handleSubmitStudent = async (data: any)=>{
  try{
    console.log(data)
  }catch(err){
    console.error(err)
  }
}

  return (
    <div>
      <h1>Create Student Page..</h1>
      <SteperForm submitHandler={(value)=>{handleSubmitStudent(value)}} steps={steps}/>
    </div>
  )
}

export default CreateStudentPage
