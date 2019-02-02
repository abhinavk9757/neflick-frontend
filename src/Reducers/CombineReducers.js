import { combineReducers } from 'redux';

import appReducer from './AppReducer/AppReducer';
import billBoardReducer from './BillBoard/BillBoardReducer';
import toolBarReducer from './ToolBar/toolBarReducer';
import loginReducer from './Login/LoginReducer';

const combinedReducer = combineReducers({
  App: appReducer,
  BillBoard: billBoardReducer,
  ToolBar: toolBarReducer,
  Login: loginReducer,
});

export default combinedReducer;
