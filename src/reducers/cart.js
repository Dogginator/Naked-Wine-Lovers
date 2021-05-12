import PRODUCTS_QUERY from "../Components/Products/Queries";

const defaultState = [];

const findProductIndex = (cart, productID) => {
    return cart.findIndex(product => product.prodid === productID);
}

const cartReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'EMPTY_CART':
            state.map((prod) => prod.quantity = 1);
            return defaultState;

        case 'ADD_TO_CART':
            return [...state, action.payload];

        case 'CHANGE_QTY':
            const increase = action.increase;
            const payload = action.product;
            const cart = [...state];

            const productIndex = findProductIndex(cart, payload.prodid);
            if (productIndex >= 0) {
                let product = cart[productIndex];
                (increase) ? product.quantity++ : product.quantity--;
                cart[productIndex] = product;
            }

            if (payload.quantity === 0) {
                cart.splice(productIndex,1);
                payload.quantity = 1;
            }

            return [...cart];
        default:
            return state;
    }
};

export default cartReducer;