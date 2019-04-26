import { combineReducers } from 'redux';
import { reducer as counter } from '../containers/Counter/store';
// import { reducer as about } from '../containers/About/store';

// 使用redux的combineReducers方法将所有reducer合并起来
export default combineReducers({
  counter,
});
