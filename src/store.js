import { createStore } from 'redux';
import rootReducer from './reducers/index';

const defaultState = {
    pickerReducer: {fgColor: '#3f51b5',
    bgColor: '#2196f3'},
    colorReducer: {}
};

const store = createStore(rootReducer, defaultState);
export default store;