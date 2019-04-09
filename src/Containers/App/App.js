import React, { Component } from 'react';
import './App.scss';
import { Layout } from 'antd';
import { Navbar } from '../../Components/Navbar/index';

class App extends Component {
  render() {
    const { Header , Content , Footer } = Layout
    return (
      <div className="App">
        <Layout className="main-layout">
          <Header className="main-header">
            <Navbar/>
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
