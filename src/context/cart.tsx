import { createContext } from "react";
import {useCartReducer } from "../hooks/useCartReducer"

export const CartContext = createContext({})

export const CartProvider = ({ children }: any) => {
    const { state, addToCart, removeFromCart, clearCart, removeOne } = useCartReducer()
    return (
        <CartContext.Provider value={
            {
                cart: state,
                addToCart,
                clearCart,
                removeFromCart,
                removeOne
            }
        }>
            {children}
        </CartContext.Provider>
    )
}