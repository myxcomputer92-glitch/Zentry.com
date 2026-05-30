import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'

const About = () => {

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    const mm=gsap.matchMedia()

    const tl=gsap.timeline({scrollTrigger:{
      // markers:true,
      trigger:'.cont-3',
      start:'14% 10%',
      end:'60% top',
      // toggleActions:'play repeat restart repeat'
      // scrub:true
    }})
    const tl2=gsap.timeline({scrollTrigger:{
      // markers:true,
      trigger:'.cont-3',
      start:'15% 10%',
      end:'30% top',
      scrub:true
    }})

mm.add('(min-width:1281px)',()=>{

  
  tl.to('.para-1-3,.h1-1-3,.h1-2-3,.h2-1-3,.h3-1-3,.h3-2-3',{
    duration:1,
    opacity:0,
  })
  
  tl2.to('.img-1-3',{
    width: '1300px',
    height: '830px'
    // width:'100%',
    // height:'100%'

  })
  
})

mm.add('(min-width:1025px) and (max-width:1280px)',()=>{

  
  tl.to('.para-1-3,.h1-1-3,.h1-2-3,.h2-1-3,.h3-1-3,.h3-2-3',{
    duration:1,
    opacity:0,
  })
  
  tl2.to('.img-1-3',{
    width: '1010px',
    height: '630px'
    // width:'100%',
    // height:'100%'

  })
  
})


mm.add('(min-width:769px) and (max-width:1024px)',()=>{

  
  tl.to('.para-1-3,.h1-1-3,.h1-2-3,.h2-1-3,.h3-1-3,.h3-2-3',{
    duration:1,
    opacity:0,
  })
  
  tl2.to('.img-1-3',{
    // width: '1450px',
    // height: '830px'
    width:'100%',
    height:'100%'

  })
  
})


mm.add('(min-width:481px) and (max-width:768px)',()=>{

  
  tl.to('.para-1-3,.h1-1-3,.h1-2-3,.h2-1-3,.h3-1-3,.h3-2-3',{
    duration:1,
    opacity:0,
  })
  
  tl2.to('.img-1-3',{
    // width: '1450px',
    // height: '830px'
    width:'100%',
    height:'100%'

  })
  
})

mm.add('(max-width:480px)',()=>{
  tl.to('.para-1-3,.h1-1-3,.h1-2-3,.h2-1-3,.h3-1-3,.h3-2-3',{
    duration:1,
    opacity:0,
  })
  
  tl2.to('.img-1-3',{
    // width: '1450px',
    // height: '830px'
    width:'100%',
    height:'100vh'

  })
  
})

  
})

return (
  <>
    <div className='cont-3'>
        <p className='para-1-3'>Welcome To Zentry</p>
        <h1 className='h1-1-3'>Discover The world's</h1>
        <h1 className='h1-2-3'>Largest Shared Adventure</h1>
        <img className='img-1-3' src="/img/about.webp" alt="" srcset="" />

        <h2 className='h2-1-3'>The Game of Games begins-your life,now an epic MMORPG</h2>
      <h3 className='h3-1-3'>Zentry unites every player from countless games and platforms,</h3>
      <h3 className='h3-2-3'>both digital and physical, into a unified Paly Economy</h3>
    </div>
    </>
  )
}

export default About
