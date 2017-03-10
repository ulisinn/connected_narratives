import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';

// import {AppContainer} from 'react-hot-loader';

const app = document.createElement('div');
app.id = 'wrapper';
// const reducers = require('./reducers');
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

document.body.appendChild(app);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  app
);

