import React, { Component } from 'react';
import './index.scss';
import './common.scss';
import  { Navbar }  from '../../components/Navbar';
import { Route, Switch, Redirect } from 'react-router';
import { Learning } from '../Learning';
import { News } from '../News';
import { Scenery } from '../Scenery';
import { Search } from '../Search';
import { Login } from '../Login';
import { Register } from '../Register';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-layout">
          <Navbar/>
          <section className="main-content">
            <div className="route-content">
              <Switch>
                <Route path="/learning" component={Learning} />
                <Route path="/news" component={News} />
                <Route path="/scenery" component={Scenery} />
                <Route path="/search" component={Search} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
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


