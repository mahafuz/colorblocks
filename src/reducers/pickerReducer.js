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
                bgColor: action.color,
                updatedDisplay: 'bgColor'
            }

        case 'SWAP_COLORS':
            return {
                ...state,
                bgColor: state.fgColor,
                fgColor: state.bgColor,
                updatedDisplay: 'bgColor'
            }
            break;
        case 'UPDATE_COLOR_RAND':
            return {
                ...state,
                ...action.color
            }     
            break;

        case 'SET_COLOR':
                if(state.updatedDisplay == 'fgColor') {
                    return {
                        ...state,
                        fgColor: action.color
                    }
                } else {
                    return {
                        ...state,
                        bgColor: action.color
                    }
                }
                break;

        default:
            return state;
            break;
    }
};

export default pickerReducer;