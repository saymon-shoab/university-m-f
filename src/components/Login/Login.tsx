'use client'
import { Button, Col, message, Row } from 'antd'
import loginImage from '../../assets/loginImage.png'
import Image from 'next/image'
import Form from '../Forms/Form'
import FormInput from '@/components/Forms/FormInput'
import { SubmitHandler } from 'react-hook-form'
import { useUserLoginMutation } from '@/redux/api/authApi'
import { isLoggedIn, storeUserInfo } from '@/service/auth.service'
import { useRouter } from 'next/navigation'

type FormValues = {
  id: string;
  password: string
}

const LoginPage = () => {
  const router = useRouter()
  const [userLogin] = useUserLoginMutation()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userLogin({ ...data }).unwrap()
      if (res) {
        router.push("/profile")
        message.success("user login successfuly")
      }
      storeUserInfo({ accessToken: res?.accessToken })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col sm={12} md={16} lg={10}>
        <Image width={500} src={loginImage} alt='login image' />
      </Col>

      <Col sm={12} md={6} lg={8}>
        <h1 style={{ margin: "15px 0px " }} >First Login your account</h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div style={{ margin: "15px 0px " }}>
              <FormInput name='id' type='text' size='large' label='User Id' />
            </div>
            <div style={{ margin: "15px 0px " }}>
              <FormInput name='password' type='password' size='large' label='User password' />
            </div>
            <Button type="primary" htmlType="submit">Login</Button>
          </Form>
        </div>
      </Col>
    </Row>
  )
}

export default LoginPage
