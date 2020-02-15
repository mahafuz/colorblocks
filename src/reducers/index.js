import { combineReducers } from 'redux';
import pickerReducer from './pickerReducer';
import groundReducer from './groundReducer';

const rootReducer = combineReducers({
    displayColors: pickerReducer,
    updatedGround: groundReducer
});

export default rootReducer;