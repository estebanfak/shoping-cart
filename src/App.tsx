import { products as initialState } from './mocks/products.json'
import './App.css'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { useState } from 'react'
import { useFilter } from './hooks/useFilter'
import { Footer } from './components/Footer'


function App() {
  const [products] = useState(initialState)
  const { filterProducts, categories } = useFilter()

  const categoriesList: any = categories(products)
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header categories={categoriesList} />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
