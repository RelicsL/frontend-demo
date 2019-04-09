import React, { Component } from 'react';
import './App.scss';
import  Navbar  from '../../Components/Navbar/index';
import { Route, Switch, Redirect } from 'react-router';
import { Learning } from '../Learning/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-layout">
          <Navbar/>
          <section className="main-content">
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
          </section>
          <footer className="main-footer">
            皖ICP备05003569号 版权所有© 2013海警学院
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
