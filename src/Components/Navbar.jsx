import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";

const Navbar = () => {


  useGSAP(()=>{
    const tl=gsap.timeline()
    const mm=gsap.matchMedia()


    
    tl.to('.navbar',{
    stagger:1,
    opacity:1,
    duration:1,
    y:5,
  })
  
  tl.to('.contain-li li',{
    stagger:0.2,
    opacity:1,
    duration:0.1,
    y:-3,
  })
  
  mm.add('(max-width:480px)',()=>{
      tl.to('.navbar',{
    stagger:1,
    opacity:1,
    // display:'none',
    duration:1,
    y:5,
  })
  })


  mm.add('(min-width:481px) and (max-width:768px)',()=>{
      tl.to('.navbar',{
    stagger:1,
    opacity:1,
    // display:'none',
    duration:1,
    y:5,
  })
  })
  
  
  
  
})


  const [showimg, setshowimg] = useState(false);

const func=()=>{
  setshowimg(!showimg)
}

  return (
    <>
      <div className="container">
        <nav className="navbar">
          <div className="contain-logo-btn">
            <img className="logo" src="/img/logo.png" alt="" srcset="" />
            <button className="btn-1">Products</button>
          </div>
          <img onClick={()=>{func()}} className="menu-img" src="/img/menu.png" alt="" srcset="" />
          <ul className={`contain-li ${showimg ? 'active' : ''}`}>
            <li>Nexus</li>
            <li>Vault</li>
            <li>Prologue</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
