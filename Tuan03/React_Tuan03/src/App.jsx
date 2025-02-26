import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InvestmentCalculator from "./Components/InvestmentCalculator"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <InvestmentCalculator/>
      </div>
    </>
  )
}

export default App
