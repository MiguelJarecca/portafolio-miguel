import { useState } from 'react'
import './App.css'
import Header from './components/public/Header'
import Home from './components/public/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
    </>
  )
}

export default App
