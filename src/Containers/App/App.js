import React, { Component } from 'react';
import './App.scss';
import { Layout } from 'antd';
class App extends Component {
  render() {
    const { Header , Content , Footer } = Layout
    return (
      <div className="App">
        <Layout className="main-layout">
          <Header className="main-header">
            <div className="logo">
              <img src="http://s2.bai.itc.cn/r/c/themes_v1310711076/global/cr/0001/i/head-cr.gif" alt="logo"/>
            </div>
          </Header>
          <Content className="main-content">

          </Content>
          <Footer className="main-footer"></Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
