export const addPizzaToCart = (pizzaObj) => ({
  type: 'ADD_PIZZA_CART',
  payload: pizzaObj,
})

export const clearCart = () => ({
  type: 'CLEAR_CART',
})

export const removeCartItem = (id) => ({
  type: 'REMOVE_CART_ITEM',
  payload: id
})

export const plusCartItem = (id) => ({
  type: 'PLUS_CART_ITEM',
  payload: id
})

export const minusCartItem = (id) => ({
  type: 'MINUS_CART_ITEM',
  payload: id
})

export const plusCartTenItem = (id) => ({
  type: 'PLUS_CART_TEN_ITEM',
  payload: id
})

export const minusCartTenItem = (id) => ({
  type: 'MINUS_CART_TEN_ITEM',
  payload: id
})
