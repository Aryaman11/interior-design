import { useState } from 'react'
import './App.css'
import Banner from './components/banner'
import Header from './components/header'
import Framethree from './components/framethree'
import Frameone from './components/frameOne'
import Aboutus from './components/aboutUs'
import Framefour from './components/framefour'
import Framefive from './components/framefive'
import Framesix from './components/framesix'
import Frameseven from './components/frameseven'
import Wannajoin from './components/wannaJoin'
import Footer from './components/footer'
import Freetrail from './components/freetrial'
import Cards from './cards'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mx-40'>
    <Header/>
    <Banner/>
    <Frameone/>
    <Freetrail/>
    <Aboutus/>
    <Framethree/>
    <Framefour/>
    <Frameseven/>
    <Framefive/>
    <Cards/>
    <Framesix/>
    </div>
     <Wannajoin/>
     <Footer />
    </>
  )
}

export default App
