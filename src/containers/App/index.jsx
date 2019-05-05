import React, { Component } from 'react';
import './index.scss';
import './common.scss';
import './reset.scss';
import './base.scss';
import  { Navbar }  from '../../components/Navbar';
import { Route, Switch, Redirect } from 'react-router';
import { MoreList } from '../MoreList';
import { Detail } from '../Detail';
import { Learning } from '../Learning';
import { News } from '../News';
import { Scenery } from '../Scenery';
import { Search } from '../Search';
import { Login } from '../Login';
import { Register } from '../Register';
import { NotFound } from '../NotFound';
import { configure } from 'mobx';
import { cookie } from '../../components/Cookie';
import { baseInject } from '../../components/History/history';
import { Forum } from '../Forum';
import { ForumEdit } from '../Forum/ForumEdit';
import { UserRoute } from '../../components/UserRoute';

configure({enforceActions: 'always'})

@baseInject
export class App extends Component {

  componentWillMount(){
    const user = cookie.getCookie('user');
    this.props.stores.setUsername(user);
  }

  render() {
    return (
      <div className="App">
        <div className="main-layout">
          <Navbar/>
          <section className="main-content">
            <div className="route-content">
              <Switch>
                <Route path="/:pid/list" component={MoreList} />
                <Route path="/:pid/detail/:did" component={Detail} />
                <Route exact path="/learning" component={Learning} />
                <Route exact path="/news" component={News} />
                <Route exact path="/scenery" component={Scenery} />
                <Route exact path="/search" component={Search} />
                <UserRoute exact path="/forum/edit" component={ForumEdit} />
                <UserRoute exact path="/forum" component={Forum} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Redirect from="/" exact to="/learning"/>
                <Route component={NotFound} />
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


