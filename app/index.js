import './styles/main.scss';

import 'react';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import createLogger from 'redux-logger';

import {browserHistory, Router} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './routes';
import DevTools from './containers/DevTools';

import {rootReducer} from './reducers/index';
import {showNarrowNav, showWideNav, toggleLanguage, toggleNavigation} from './actions/';

const rootElement = document.createElement('div');
const setLanguage = false;

rootElement.id = 'root';
document.body.appendChild(rootElement);

const logger = createLogger();
const enhancer = compose(
  applyMiddleware(logger),
  DevTools.instrument()
);

const store = createStore(rootReducer, {}, enhancer);
const history = syncHistoryWithStore(browserHistory, store);

if (setLanguage) {
  store.dispatch(toggleLanguage(navigator.language));
  store.dispatch(toggleNavigation(navigator.language));
  store.dispatch(toggleLanguage('fr'));
  store.dispatch(toggleNavigation('fr'));
}

window.addEventListener('resize', onResize);
onResize();

function onResize() {
  const currentWidth = store.getState().isNarrow;
  if ((window.innerWidth < 900) !== currentWidth) {
    store.dispatch((window.innerWidth < 900) ? showNarrowNav() : showWideNav());
  }
}

render(
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes}/>
      {/*<DevTools />*/}
    </div>
  </Provider>,
  
  rootElement
);
