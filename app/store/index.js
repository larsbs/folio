import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer';
import electronMiddleware from 'electron-middleware';
//import devTools from 'remote-redux-devtools';


export default createStore(
  reducer,
  compose(
    applyMiddleware(electronMiddleware),
    //devTools({ hostname: 'localhost', port: '8000', name: 'Folio' }),
  )
);
