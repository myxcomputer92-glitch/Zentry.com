import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import Promotion from './Components/Promotion'
import Footer from './Components/Footer'
import About from './Components/About'
import Story from './Components/Story'
import Hero from './Components/Hero'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function App() {
  
  const Multiple_videos=[
        '/videos/hero-1.mp4',
        '/videos/hero-2.mp4',
        '/videos/hero-3.mp4', 
        '/videos/hero-4.mp4',
      ]  
      
      const [currentvideo, setcurrentvideo] = useState(0)
      
      const ChangeVideo=(prev)=>{
        setcurrentvideo((prev)=>{
          return prev===Multiple_videos.length -1 ? 0 : prev + 1
        })  
                






      }
  return (
    <>
    <div className="video-wrapper">

    <div className="contain-videoss" onClick={Multiple_videos}>
        <video muted autoPlay playsInline loop className='video-1-2' src={Multiple_videos[currentvideo]}></video>
        {/* <video muted autoPlay playsInline loop className='video-1-2' src="/videos/hero-2.mp4"></video> */}
        {/* <video muted autoPlay playsInline loop className='video-1-2' src="/videos/hero-3.mp4"></video> */}
        {/* <video muted autoPlay playsInline loop className='video-1-2' src="/videos/hero-4.mp4"></video> */}
        {/* <video src="public/videos/hero-2.mp4"></video> */}
        {/* <video src="public/videos/hero-3.mp4"></video> */}
        {/* <video src="public/videos/hero-4.mp4"></video> */}
      </div>



   <Navbar/>
   <Hero
   Multiple_videos={Multiple_videos}
   currentvideo={currentvideo}
   ChangeVideo={ChangeVideo}
   />
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
