import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.jsx';
import {AppContainer} from 'react-hot-loader';

const app = document.createElement('div');
document.body.appendChild(app);

const render = App => {
  ReactDOM.render(
    <AppContainer><App/></AppContainer>,
    app
  );
};

render(Main);

if (module.hot) {
  module.hot.accept('./main.jsx', () => render(Main));
}
