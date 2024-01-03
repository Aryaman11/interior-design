import { useState } from 'react'
import './App.css'
import Banner from './components/banner'
import Header from './components/header'
import Framethree from './components/framethree'
import Frameone from './components/frameOne'
import Aboutus from './components/aboutUs'
import Framefour from './components/framefour'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mx-40'>
    <Header/>
    <Banner/>
    <Frameone/>
    <Framethree/>
    <Aboutus/>
    <Framefour/>
    </div>
  )
}

export default App
