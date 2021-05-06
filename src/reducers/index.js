import { combineReducers } from 'redux';
import cartReducer from './cart';
import totalPriceReducer from './totalprice';
import productAmount from './productAmount';

const allReducers = combineReducers({
    cart: cartReducer,
    totalPrice: totalPriceReducer,
    products: productAmount
})

export default allReducers;