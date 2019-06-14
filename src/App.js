import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import logo from './assets/img/react.svg';


const { Header, Sider, Content } = Layout;
const navigateTo = url => window.history.pushState(null, null, url);

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" onClick={() => navigateTo('/home')}>
            <Icon type="home" />
            <span>Home</span>
          </Menu.Item>
          <Menu.Item key="2" onClick={() => navigateTo('/antd')}>
            <Icon type="dot-chart" />
            <span>AntD</span>
          </Menu.Item>
          <Menu.Item key="3" onClick={() => navigateTo('/angularJS')}>
            <Icon type="pie-chart" />
            <span>Angular</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="header">
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => setCollapsed(!collapsed)}
          />
          <img src={logo} className="reactLogo" alt="logo" />
          <h1 className="App-title">Welcome to React Portal</h1>
        </Header>
        <Content className="content">
          <div id="home-app" />
          <div id="antd-app" />
          <div id="angular-app" />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
