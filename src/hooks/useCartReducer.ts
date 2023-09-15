import { useEffect, useReducer } from "react";
import { Product } from "../types";
import { cartReducer, cartInitialState, CART_ACTIONS_TYPES } from "../reducers/cart";


export const useCartReducer = () => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    useEffect(() => {
        (function initialLocalStorage() {
            return dispatch({
                type: CART_ACTIONS_TYPES.INITIAL_LOCAL_STORAGE,
                payload: null
            })
        })()
    }, [])

    const addToCart = (product: Product) => {
        return dispatch({
            type: CART_ACTIONS_TYPES.ADD_TO_CART,
            payload: product
        })
    }
    const clearCart = () => {
        return dispatch({
            type: CART_ACTIONS_TYPES.CLEAR_CART,
            payload: null
        })
    }
    const removeFromCart = (product: Product) => {
        return dispatch({
            type: CART_ACTIONS_TYPES.REMOVE_FROM_CART,
            payload: product
        })
    }
    const removeOne = (product: Product) => {
        return dispatch({
            type: CART_ACTIONS_TYPES.REMOVE_ONE,
            payload: product
        })
    }

    return { state, addToCart, removeFromCart, clearCart, removeOne }
}