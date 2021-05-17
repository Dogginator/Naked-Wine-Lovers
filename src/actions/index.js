export const ADD_TO_CART = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}

export const EMPTY_CART = () => {
    return {
        type: 'EMPTY_CART'
    }
}

export const RESET_TOTAL = () => {
    return {
        type: 'RESET_TOTAL'
    }
}

export const INCREASE = (price) => {
    return {
            type: 'INCREASE_TOTAL',
            payload: price
    }
}

export const DECREASE = (price) => {
    return {
            type: 'DECREASE_TOTAL',
            payload: price
    }
}

export const CHANGE_QTY = (payload,increase) => {
    return {
            type: 'CHANGE_QTY',
            product: payload,
            increase: increase,
    }
}

export const DECREASE_QTY = (id,quantity) => {
    return {
            type: 'DECREASE_QTY',
            payload: {id, quantity},
    }
}

export const INCREASE_AMOUNT = () => {
    return {
            type: 'INCREASE_PRODUCT'
    }
}

export const DECREASE_AMOUNT = () => {
    return {
            type: 'DECREASE_PRODUCT'
    }
}