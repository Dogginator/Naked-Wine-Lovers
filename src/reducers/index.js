import { combineReducers } from 'redux';
import cartReducer from './cart';
import totalPriceReducer from './totalprice';
import productAmount from './productAmount';
import productsReducer from './products';
import custInfo from './custInfo';
import { reducer as formReducer } from 'redux-form';

const allReducers = combineReducers({
    form: formReducer,
    cart: cartReducer,
    totalPrice: totalPriceReducer,
    products: productAmount,
    productsCMS: productsReducer,
    custInfo: custInfo
})

export default allReducers;