const defaultState = [];

const custInfo = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_USER_INFO':
            return state = action.payload;
        
        default:
            return state;
    }
}

export default custInfo;