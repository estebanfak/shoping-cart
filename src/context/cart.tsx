import { createContext, useEffect, useState } from "react";
import { Product } from "../types";


export const CartContext = createContext({})


export const CartProvider = ({ children }: any) => {
    const [cart, setCart] = useState<Product[]>([])

    useEffect(() => {
        const initialCart = localStorage.getItem('cart')
        if (initialCart) {
            setCart(JSON.parse(initialCart))
        }
    }, [])

    const addToCart = (product: Product) => {
        const productInCartIndex = cart.findIndex((item: Product) => item.id === product.id);
        const newCart: Product[] = structuredClone(cart)
        if (productInCartIndex >= 0) {
            newCart[productInCartIndex].quantity += 1
            localStorage.setItem('cart', JSON.stringify(newCart))
            return setCart(newCart)
        }
        setCart(prevState => {
            const newState = [
                ...prevState,
                {
                    ...product,
                    quantity: 1
                }
            ]
            localStorage.setItem('cart', JSON.stringify(newState))
            return newState;
        })
    }

    const clearCart = () => {
        setCart([])
        localStorage.removeItem('cart')
    }

    const removeFromCart = (product: Product) => {
        const newCart: Product[] = structuredClone(cart).filter((item: Product) => item.id !== product.id)
        localStorage.setItem('cart', JSON.stringify(newCart))
        setCart(newCart)
    }

    const removeOne = (product: Product) => {
        const productToSubstractQuantityIndex: number = cart.findIndex((item: Product) => item.id === product.id)
        const newCart: Product[] = structuredClone(cart)
        if(productToSubstractQuantityIndex >= 0){
            if(newCart[productToSubstractQuantityIndex].quantity > 1){
                newCart[productToSubstractQuantityIndex].quantity -= 1
                localStorage.setItem('cart', JSON.stringify(newCart))
                return setCart(newCart)
            }
            removeFromCart(product)
        }
    }

    return (
        <CartContext.Provider value={
            {
                cart,
                setCart,
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