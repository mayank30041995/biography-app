import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import profile from './profile';

export default combineReducers({
  auth,
  alert,
  profile
});
/*
import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';

export default combineReducers({
  alert,
  auth,
  profile,
  post
});

 */
