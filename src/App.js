import React from 'react';
import './App.css';
import Router from "./router";
import transparenticon from './icons/melotalk_transparent.svg';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Sider, Content } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider style={{ padding: '0.5rem', background: '#FFFFFF' }} >
        <p align="middle">
          <img src={transparenticon} width={56} height={56} alt='ㅙㅣㅅ' />
        </p>
        <Menu
          theme="light"
          mode="inline"
          style={{ border: '0' }}
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout style={{ height: '100vh' }}>
        <Content
          style={{
            padding: 10,
            background: colorBgContainer,
          }}
        >
          <Router />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;