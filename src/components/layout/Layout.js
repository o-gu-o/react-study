import React from 'react'
import QfHeader from './Header'
import QfMain from './Main'
import QfSider from './Sider'
import './style.scss'
import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;


export default props=>{
  return (
    <div className='qf-layout'>
      <Layout>

        <Sider width='150'> <QfSider /> </Sider>

        <Layout>
          <Header> <QfHeader /> </Header>
          <Content> <QfMain /> </Content>
        </Layout>
      </Layout>
    </div>
  )
}




