import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Editor from './containers/Editor';

import 'less/app';


const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Editor />
    </Provider>,
    document.getElementById('root')
  );
};


store.subscribe(render);
render();
