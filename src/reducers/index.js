import { combineReducers } from 'redux';
import cartReducer from './cart';
import totalPriceReducer from './totalprice';
import productAmount from './productAmount';
import productsReducer from './products';

const allReducers = combineReducers({
    cart: cartReducer,
    totalPrice: totalPriceReducer,
    products: productAmount,
    productsCMS: productsReducer
})

export default allReducers;