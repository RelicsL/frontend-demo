import React, { Component } from 'react';
import './App.scss';
import { Layout } from 'antd';
import  Navbar  from '../../Components/Navbar/index';
import { Route, Switch, Redirect } from 'react-router';
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
            <Switch>
              <Route path="/learning" />
              <Route path="/news" />
              <Route path="/scenery" />
              <Route path="/search" />
              <Redirect from="/" exact to="/learning"/>
            </Switch>
          </Content>
          <Footer className="main-footer"></Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
