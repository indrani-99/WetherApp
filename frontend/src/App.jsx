import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRoutes from './components/AllRoutes'
import Whether from './components/Whether'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Whether></Whether>
      {/* <AllRoutes></AllRoutes> */}
    </>
  )
}

export default App
