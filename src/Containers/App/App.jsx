import React, { Component } from 'react';
import './App.scss';
import { Layout } from 'antd';
import  Navbar  from '../../Components/Navbar/index';
import { Route, Switch, Redirect } from 'react-router';
import { Learning } from '../Learning/index';

class App extends Component {
  render() {
    const { Content , Footer } = Layout
    return (
      <div className="App">
        <Layout className="main-layout">
          <Navbar/>
          <Content className="main-content">
            <div className="route-content">
              <Switch>
                <Route path="/learning" component={Learning} />
                <Route path="/news" />
                <Route path="/scenery" />
                <Route path="/search" />
                <Route path="/login" />
                <Route path="/register" />
                <Redirect from="/" exact to="/learning"/>
              </Switch>
            </div>
          </Content>
          <Footer className="main-footer"></Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
