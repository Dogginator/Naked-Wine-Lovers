const defaultState = [];

const productsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'INSERT_PRODUCTS':
            return state = action.payload;
        default:
            return state;
    }
}

export default productsReducer;