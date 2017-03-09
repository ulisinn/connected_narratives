import React from 'react';
import ReactDOM from 'react-dom';
import Main from './app.jsx';
import {AppContainer} from 'react-hot-loader';

const app = document.createElement('div');
document.body.appendChild(app);

const render = App => {
  ReactDOM.render(
    <AppContainer><App lang={'en'}/></AppContainer>,
    app
  );
};

render(Main);

if (module.hot) {
  module.hot.accept('./app.jsx', () => render(Main));
}
