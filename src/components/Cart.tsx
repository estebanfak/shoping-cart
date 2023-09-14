import { useId } from "react"
import { CartIcon, ClearCartIcon } from "./Icons"

import './Cart.css'
import { useCart } from "../hooks/useCart"
import { Product } from "../types"

export const Cart = () => {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart, removeOne } = useCart()

    return (
    <>
        <label className="cart-button" htmlFor={cartCheckboxId}>
            <CartIcon/>
        </label>
        <input id={cartCheckboxId} type="checkbox" hidden/>

        <aside className="cart">
            {
                cart.length > 0 && cart.map((prod: Product) => {
                    return (
                        <ul key={prod.id}>
                        <li style={{listStyle: 'none'}}>
                            <img 
                                src={prod.thumbnail}
                                alt={prod.title}
                            />
                            <div>
                                <strong>{prod.title}</strong> - ${prod.price}
                            </div>
                            <footer>
                            <button onClick={() => {removeOne(prod)}}>-</button>
                                <small>
                                    Qty: {prod.quantity}
                                </small>
                                <button onClick={() => {addToCart(prod)}}>+</button>
                            </footer>
                        </li>
                    </ul>
                    )
                })
            }
            <button onClick={() => {clearCart()}}>
                <ClearCartIcon/>
            </button>
        </aside>
    </>
    )
}