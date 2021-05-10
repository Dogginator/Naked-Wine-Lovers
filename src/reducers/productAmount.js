const productAmount = (state = 1, action) => {
    switch(action.type) {
        case 'INCREASE_PRODUCT':
            return state += 1;
        case 'DECREASE_PRODUCT':
            return state -= 1;
        default:
            return state;
    }
}

export default productAmount;