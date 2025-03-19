import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test_useEffect from './components/Test_useEffect'
import Test_Reducer_Ref from './components/Test_Reducer_Ref'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Test_useEffect/> */}
      <Test_Reducer_Ref/>
    </>
  )
}

export default App
