import { combineReducers } from 'redux';

import code from './code';
import toggleViews from './toggle-views';


export default combineReducers({
  code,
  toggleViews
});
