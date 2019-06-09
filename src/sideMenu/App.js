import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.less';
import logo from './static/img/react.svg';
import './App.css';

const { Header, Sider, Content } = Layout;
const navigateTo = url => window.history.pushState(null, null, url);

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" onClick={() => navigateTo('/')}>
            <Icon type="home" />
            <span>Home</span>
          </Menu.Item>
          <Menu.Item key="2" onClick={() => navigateTo('/react')}>
            <Icon type="dot-chart" />
            <span>React</span>
          </Menu.Item>
          <Menu.Item key="3" onClick={() => navigateTo('/angular')}>
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
          <div id="react-app" />
          <div id="angular-app" />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
