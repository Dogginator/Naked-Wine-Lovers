import PRODUCTS_QUERY from "../Components/Products/Queries";

const defaultState = [];

const findProductIndex = (cart, productID) => {
    return cart.findIndex(product => product.id === productID);
}

const cartReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'EMPTY_CART':
            return defaultState;
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'INCREASE_QTY':
            const incPayload = action.payload;
            const incCart = state;

            const incProductIndex = findProductIndex(incCart, incPayload.id);
            if (incProductIndex >= 0) {
                let product = incCart[incProductIndex];
                product.quantity = incPayload.quantity;
                incCart[incProductIndex] = product;
            }
            return [...incCart];    
        case 'DECREASE_QTY':
            const decPayload = action.payload;
            const decCart = state;

            const decProductIndex = findProductIndex(decCart, decPayload.id);
            if(decProductIndex >= 0) {
                let product = decCart[decProductIndex];
                product.quantity = decPayload.quantity;
                decCart[decProductIndex] = product;
            }
            return [...decCart];
        default:
            return state;
    }
};

export default cartReducer;