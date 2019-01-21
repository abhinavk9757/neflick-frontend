import { combineReducers } from 'redux';

import billBoardReducer from './BillBoard/BillBoardReducer';
import toolBarReducer from './ToolBar/toolBarReducer';

const combinedReducer = combineReducers({
  BillBoard: billBoardReducer,
  ToolBar: toolBarReducer,
});

export default combinedReducer;
