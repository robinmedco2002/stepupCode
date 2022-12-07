import React from 'react';
import { Link, NavLink } from 'react-router-dom';



const StepupNavbar = () => {
  return (
    <>
    
     {/* ======= Header =======  */}
     
  <header id="header" className="d-flex align-items-center" >
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        <h1><NavLink exact to="/">StepUp Software</NavLink></h1>

         {/* Uncomment below if you prefer to use an image logo  */}
        {/* <Link to="index.html">
        <img src="assets/img/logo.png" alt="" className="img-fluid"></Link> */}

      </div>

      <nav id="navbar" className="navbar" >
        <ul>
          <li><NavLink exact className="nav-link scrollto" to="/" active >Home</NavLink></li>
          <li><NavLink exact className="nav-link scrollto" to="/about" active>About Us</NavLink></li>
         
          <li className="dropdown"><NavLink exact to="/development" active ><span>Services</span> <i className="bi bi-chevron-down"></i></NavLink>
            <ul>
              <li><NavLink exact to="/development">Web & Mobile Development</NavLink></li>
              <li className="dropdown"><NavLink exact to="/"><span>Website Design</span> <i className="bi bi-chevron-right"></i></NavLink>
                <ul>
                  <li><NavLink exact to="/wordpress">WordPress Website</NavLink></li>
                  <li><NavLink exact to="/ecommerce">Ecommerce Website</NavLink></li>
                  <li><NavLink exact to="/customcms">Custom CMS Website</NavLink></li>
                </ul>
              </li>
              <li><NavLink exact to="/digital">Digital Marketing</NavLink></li>
              <li><NavLink exact to="/Creative">Creative Design</NavLink></li>
            </ul>
          </li>
          <li><NavLink exact className="nav-link scrollto " to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink exact className="nav-link scrollto" to="/contact">Contact</NavLink></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
        
      </nav>

    </div>




</header>




  
    </>
  )
}

export default StepupNavbar