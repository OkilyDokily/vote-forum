import interfaceReducer from './interface-reducer';
import postListReducer from './post-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  business: postListReducer,
  interface: interfaceReducer
});

export default rootReducer;