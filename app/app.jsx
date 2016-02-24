import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './containers/App';
import ElectronListener from './utils/electron-listener';


ElectronListener(store.getState, store.dispatch);

const isPreviewWindow = window.location.hash === '#preview';

ReactDOM.render(
  <Provider store={store}>
    <App isPreviewWindow={isPreviewWindow} />
  </Provider>,
  document.getElementById('root')
);
