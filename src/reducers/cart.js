const defaultState = [];

const cartReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'EMPTY_CART':
            return defaultState;
        case 'ADD_TO_CART':
            return [...state, action.payload];
        // case 'INCREASE_QTY':
        //     return {...state, products: products.state.map(product => product.id == action.id
        //     ? {quantity: product.quantity + 1}
        //     : <h1></h1>)};      
        default:
            return state;
    }
};

export default cartReducer;