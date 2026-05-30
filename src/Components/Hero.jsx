import React,{useState,useRef} from 'react'

const Hero = ({currentvideo,ChangeVideo,Multiple_videos}) => {
  return (
    <>
    <div className='cont-2'>
      <h1 className='h1-1-2'>Redefi<b>n</b>e</h1>
      <p className='p-1-2'>Enter the metagame Layer <br /> Unleash the play economy</p>
      <button className='btn-1-2'>Watch Trailer</button>
      <div className='video-swap' onClick={ChangeVideo}>
      <video className='changeable-videos' loop muted playsInline autoPlay src={Multiple_videos[currentvideo]}></video>  
        
        
         </div>
      <h1 className='h1-2-2'>G<b>a</b>ming</h1>
    </div>
    </>
  )
}

export default Hero
