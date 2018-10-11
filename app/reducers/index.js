import { combineReducers } from 'redux';
import userInfo from './userInfo';
import saveTodo from './saveTodo';

export default combineReducers({
  userInfo,
  saveTodo,
});
