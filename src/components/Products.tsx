import { useCart } from '../hooks/useCart'
import { type Product, type Products as IProducts } from '../types'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

export const Products = ({ products }: IProducts) => {

    const { cart, addToCart, removeFromCart } = useCart()

    return (
        <ul className="d-flex row g-5">
            {
                products && products.length > 0 ?
                    products.map((prod: Product) => {
                        return (
                            <div className="card" style={{ width: '18rem' }} key={prod.id}>
                                <div style={{ width: '200px', height: '200px', display: 'flex' }}>
                                    <img src={prod.thumbnail} className="card-img-top" alt={prod.title} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{prod.title}</h5>
                                    <p className="card-text">{prod.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item" style={{ textDecoration: 'none' }}>Price: ${prod.price}</li>
                                </ul>
                                {
                                    cart?.some((item: any) => prod.id === item.id) ?
                                        <button onClick={() => { removeFromCart(prod) }} style={{backgroundColor: 'red'}}>
                                            <RemoveFromCartIcon />
                                        </button> :
                                        <button onClick={() => { addToCart(prod) }} style={{backgroundColor: 'blue'}}>
                                            <AddToCartIcon />
                                        </button>
                                }
                            </div>
                        )
                    }) :
                    <p>No hay productos</p>
            }
        </ul>
    )
}