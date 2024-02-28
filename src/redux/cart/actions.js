import CartActionsTypes from "./action-types";

export const addProductToCart = (payload) => ({
    type: CartActionsTypes.ADD_PRODUCT,
    payload
})

// recebe o payload que é o id do produto
export const removeProductFromCart = (payload) => ({
    type: CartActionsTypes.REMOVE_PRODUCT,
    payload
})

// recebe o payload que é o id do produto
export const increaseProductQuantity = (payload) => ({
    type: CartActionsTypes.INCREASE_PRODUCT_QUANTITY,
    payload
})

// recebe o payload que é o id do produto
export const decreaseProductQuantity = (payload) => ({
    type: CartActionsTypes.DECREASE_PRODUCT_QUANTITY,
    payload
})