import { createStore } from 'redux';
import rootReducer from './reducers/index';

const defaultState = {
    displayColors: {fgColor: '#3f51b5',
    bgColor: '#2196f3'}
};

const store = createStore(rootReducer, defaultState);
export default store;