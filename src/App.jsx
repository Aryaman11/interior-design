import { useState } from 'react'
import './App.css'
import Banner from './components/banner'
import Header from './components/header'
import Framethree from './components/framethree'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mx-40'>
    <Header/>
    <Banner/>
    <Framethree/>
    </div>
  )
}

export default App
