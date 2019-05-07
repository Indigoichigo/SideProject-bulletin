import login from './loginReducer';
import bulletinData from './bulletinDataReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  bulletinData,
  login,
});
