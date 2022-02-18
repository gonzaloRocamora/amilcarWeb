import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
      
  const [isMobile, setIsMobile] = useState(false);

  return (
   
   <nav className="navBar">
      <div className='divLogo'>
      <h3 className="amilcar">Amilcar </h3>
      
      <h3 className='ferreyro'>Ferreyro</h3>
      </div>
      
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} 
        onClick={() => setIsMobile(false)}
      >
          
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/Store" className="home">
          <li>Store</li>
        </Link>
        <Link to="/Video" className="home">
          <li>Videos</li>
        </Link>
        <Link to="/Connect" className="home">
          <li>Connect</li>
        </Link>
       
      </ul>
      <button onClick={() => setIsMobile(!isMobile)}>Touch Me</button>
    
    </nav>
  );
}
