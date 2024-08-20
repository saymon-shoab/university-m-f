"use client"

import { Breadcrumb, Layout, theme } from "antd";
import UMBreadCrumb from "./UMBreadCrumb";
import Header from "./Header";

const {  Content } = Layout;


const Contents = ({children}:{children:React.ReactNode}) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
  return (
    <Content style={{ margin: '0 16px' , minHeight:"100vh", color:'black'}}>
      <Header></Header>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
    </Breadcrumb>
    <div
      style={{
        padding: 24,
        minHeight: 360,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <UMBreadCrumb items={[]}/>
      {children}
    </div>
  </Content>

  )
}

export default Contents
