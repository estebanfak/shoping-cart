import Items from './components/Items'
import Products from './mocks/Products.json'
import { useEffect, useState } from 'react'
import './App.css'
import { ItemList } from './components/ItemList'

function App() {

  const [products, setProducts] = useState<any>([])
  const [productsInitialState, setProdusctsInitialState] = useState<any>([])

  useEffect(() => {
    const prod = Products.products
    setProducts(Products.products)
    setProdusctsInitialState(Products.products)
  }, [])

  return (
    <>
      <h1>Shopping cart</h1>
      <Items>
        <ItemList list={products} />
      </Items>
    </>
  )
}

export default App
