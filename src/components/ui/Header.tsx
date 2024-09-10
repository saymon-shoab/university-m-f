import { Layout, Row, Dropdown, MenuProps, Button, Space, Avatar } from 'antd';
import {useRouter} from 'next/navigation';
import {
    UserOutlined,
  } from '@ant-design/icons';
import { getUserInfo, logoutUser } from '@/service/auth.service';
import { authKey } from '@/constants/storageKey';
const { Header: AntHeader } = Layout;

const Header = () => {
    const { role , ...userData} = getUserInfo() as any
    const router = useRouter()
    const logout = ()=>{

        logoutUser(authKey)
        router.push('/login')
    }
    const items: MenuProps["items"] = [
        {
            key: '0',
            label: (
                <Button onClick={logout} type="text" danger>
                    Logout
                </Button>
            )
        }
    ]
  return (
    <AntHeader style={{
        background: "#fff"
    }}>
      <Row justify={'end'} align='middle' style={{height:"100%"}}>
      <p style={{marginRight:'10px', fontWeight:"bold"}}>{role}</p>

        <Dropdown menu={{items}}>
            <Space wrap size={16}>
             <Avatar size="large" icon={<UserOutlined />} />
            </Space>
        </Dropdown>
      </Row>
    </AntHeader>
  )
}

export default Header
