const defaultState = 0; 

const totalPriceReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'INCREASE_TOTAL':
            return state += action.payload;
        case 'DECREASE_TOTAL':
            return state -= action.payload;
        case 'RESET_TOTAL':
            return state = defaultState;
        default:
            return state;
    }
};

export default totalPriceReducer;