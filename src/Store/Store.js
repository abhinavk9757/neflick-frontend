import { createStore } from 'redux';
import combinedReducer from '../Reducers/CombineReducers';

const store = createStore(combinedReducer);

export default store;
