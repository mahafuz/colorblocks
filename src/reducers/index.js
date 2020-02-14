import { combineReducers } from 'redux';
import pickerReducer from './pickerReducer';
import colorReducer from './colorReducer';

const rootReducer = combineReducers({
    pickerReducer,
    colorReducer
});

export default rootReducer;