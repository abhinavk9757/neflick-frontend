import { createStore } from 'redux';
import combineReducer from '../Reducers/CombineReducers';

const store = createStore(combineReducer);

export default store;
