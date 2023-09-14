import { products as initialState } from './mocks/Products.json'
import './App.css'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { useState } from 'react'
import { useFilter } from './hooks/useFilter'
// import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'


function App() {
  const [products] = useState(initialState)
  const { filterProducts, categories } = useFilter()

  const categoriesList: any = categories(products)
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header categories={categoriesList} />
      <Cart/>
      <Products products={filteredProducts} />
      {/* <Footer /> */}
    </CartProvider>
  )
}

export default App
