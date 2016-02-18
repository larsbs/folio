import { combineReducers } from 'redux';

import app from './app';
import code from './code';
import toggleViews from './toggle-views';


export default combineReducers({
  app,
  code,
  toggleViews
});
