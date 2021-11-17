import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.less';

if (module && module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App name="breeze" />, document.querySelector('#root'));
