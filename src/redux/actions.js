export const addToCart = id => ({
    type: 'ADD_TO_CART',
    id
})

export const removeFromCart = id => ({
    type: 'REMOVE_FROM_CART',
    id
})

export const toggleVisibility = () => ({
    type: 'TOGGLE_VISIBILITY'
})
