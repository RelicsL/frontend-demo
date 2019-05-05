import React from 'react';
import { baseInject } from '../History/history';
import { Route } from 'react-router-dom';
import { showError } from '../Message';
import { Redirect } from 'react-router-dom';

@baseInject
export class UserRoute extends React.Component{

  componentWillMount() {
    if (!this.props.stores.username) {
      showError('登陆后才可以查看校友论坛！');
    }
  }

  render() {
    if (!!this.props.stores.username) {
      return <Route {...this.props} />
    } else {
      return <Redirect to={{ pathname: '/login'}} />
    }
    
  }
}