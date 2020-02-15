const groundReducer = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_FG_COLOR':
            return 'FGround';
            break;

        case 'UPDATE_BG_COLOR':
            return 'BGround';
            break;
    
        default:
            return state;
            break;
    }
    
}

export default groundReducer;