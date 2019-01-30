import { combineReducers } from 'redux';

import billBoardReducer from './BillBoard/BillBoardReducer';
import toolBarReducer from './ToolBar/toolBarReducer';
import loginReducer from './Login/LoginReducer';

const combinedReducer = combineReducers({
  BillBoard: billBoardReducer,
  ToolBar: toolBarReducer,
  Login: loginReducer,
});

export default combinedReducer;
