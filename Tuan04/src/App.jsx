import { useState } from 'react'
import './App.css'
import ProductsSearch from './pages/ProductsSearch/ProductsSearch';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header/>
  <ProductsSearch/>
  <Footer/>
  </>
  )
}

export default App
