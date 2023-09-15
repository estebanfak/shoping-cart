import { Product } from "../types";

export const cartInitialState: Product[] = []

export const CART_ACTIONS_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    CLEAR_CART: 'CLEAR_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    REMOVE_ONE: 'REMOVE_ONE',
    INITIAL_LOCAL_STORAGE: 'INITIAL_LOCAL_STORAGE'

}
export const cartReducer = (state: Product[], action: { type: any; payload: any; }) => {
    const {type, payload} = action
    switch (type) {
        case CART_ACTIONS_TYPES.ADD_TO_CART:
            const productInCartIndex = state.findIndex((item: Product) => item.id === payload.id)
            if (productInCartIndex >= 0) {
                const newState: Product[] = structuredClone(state)
                newState[productInCartIndex].quantity += 1
                localStorage.setItem('cart', JSON.stringify(newState))
                return newState
            }else{
                const newState = [
                    ...state,
                    {
                        ...payload,
                        quantity: 1
                    }
                ]
                localStorage.setItem('cart', JSON.stringify(newState))
                return newState;
            }
        case CART_ACTIONS_TYPES.CLEAR_CART:
            localStorage.removeItem('cart')
            return cartInitialState
        case CART_ACTIONS_TYPES.REMOVE_FROM_CART:
            const newCart: Product[] = structuredClone(state).filter((item: Product) => item.id !== payload.id)
            localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        case CART_ACTIONS_TYPES.REMOVE_ONE:
            const productToSubstractQuantityIndex: number = state.findIndex((item: Product) => item.id === payload.id)
            const newCartRemovedItem: Product[] = structuredClone(state)
            if(productToSubstractQuantityIndex >= 0){
                if(newCartRemovedItem[productToSubstractQuantityIndex].quantity > 1){
                    newCartRemovedItem[productToSubstractQuantityIndex].quantity -= 1
                    localStorage.setItem('cart', JSON.stringify(newCartRemovedItem))
                    return newCartRemovedItem
                }else {
                    const newCart: Product[] = structuredClone(state).filter((item: Product) => item.id !== payload.id)
                    localStorage.setItem('cart', JSON.stringify(newCart))
                    return newCart
                }
            }
            break;
        case CART_ACTIONS_TYPES.INITIAL_LOCAL_STORAGE:
            const initialCart = localStorage.getItem('cart')
            if (initialCart) {
                return JSON.parse(initialCart)
            }
            break
        default:
            return state
    }
    return state
}