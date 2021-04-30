import interfaceReducer from './interface-reducer';
import postListReducer from './post-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  posts: postListReducer,
  interface: interfaceReducer
});

export default rootReducer;