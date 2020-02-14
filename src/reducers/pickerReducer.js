const pickerReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_FG_COLOR':
        return {
                ...state,
                fgColor: action.color
            }
        break;
        
        case 'UPDATE_BG_COLOR':
            return {
                ...state,
                bgColor: action.color
            }
        default:
            return state;
            break;
    }
};

export default pickerReducer;