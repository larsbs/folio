import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer';
import electronMiddleware from 'electron-middleware';


export default createStore(
  reducer,
  compose(
    applyMiddleware(electronMiddleware)
  )
);
