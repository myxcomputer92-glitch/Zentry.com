import React, { useState } from "react";

const Navbar = () => {
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
