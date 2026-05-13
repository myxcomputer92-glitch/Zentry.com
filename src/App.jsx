import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import Promotion from './Components/Promotion'
import Footer from './Components/Footer'
import About from './Components/About'
import Story from './Components/Story'
import Hero from './Components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="video-wrapper">

    <div className="contain-videoss">
        <video muted autoPlay playsInline loop className='video-1-2' src="public/videos/hero-1.mp4"></video>
        {/* <video src="public/videos/hero-2.mp4"></video> */}
        {/* <video src="public/videos/hero-3.mp4"></video> */}
        {/* <video src="public/videos/hero-4.mp4"></video> */}
      </div>



   <Navbar/>
   <Hero/>
    </div>
   <About/>
   <Product/>
   <Story/>
   <Promotion/>
   <Footer/>
    </>
  )
}

export default App
