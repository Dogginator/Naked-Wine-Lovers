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

export const INCREASE_QTY = (id) => {
    return {
            type: 'INCREASE_QTY',
            id,
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