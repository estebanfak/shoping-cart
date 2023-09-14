import './Footer.css'
import { useCart } from '../hooks/useCart'
import { Product } from '../types'

export const Footer = () => {
    const { cart } = useCart()
    const mostrar = cart?.map((prod: Product) => {
        return {
            title: prod.title,
            price: prod.price,
            quantity: prod.quantity
        }
    })
    return (
        <footer className="footer">
            {
                JSON.stringify(mostrar, null, 2)
            }
        </footer>
    )
}