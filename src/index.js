import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import { App } from './containers/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter , Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { stores } from './stores';

ReactDOM.render(
  <Provider stores={stores}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>
  ,
  document.querySelector("#root")
);

serviceWorker.unregister();
