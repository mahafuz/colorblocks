import { combineReducers } from 'redux';
import pickerReducer from './pickerReducer';

const rootReducer = combineReducers({
    displayColors: pickerReducer
});

export default rootReducer;