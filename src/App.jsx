import { useState } from 'react'
import './App.css'
import Banner from './components/banner'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mx-40'>
    <Header/>
    <Banner/>
    </div>
  )
}

export default App
