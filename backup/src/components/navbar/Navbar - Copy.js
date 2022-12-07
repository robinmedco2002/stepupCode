import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    
     {/* ======= Header =======  */}
     
  <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        <h1><Link to="/">StepUp Software</Link></h1>

         {/* Uncomment below if you prefer to use an image logo  */}
        {/* <Link to="index.html">
        <img src="assets/img/logo.png" alt="" className="img-fluid"></Link> */}

      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li><Link className="nav-link scrollto active" to="/" >Home</Link></li>
          <li><Link className="nav-link scrollto active" to="/stepup" >stepup</Link></li>
          <li><Link className="nav-link scrollto" to="/about">About Us</Link></li>
         
          <li className="dropdown"><Link to="#"><span>Services</span> <i className="bi bi-chevron-down"></i></Link>
            <ul>
              <li><Link to="/development">Web & Mobile Development</Link></li>
              <li className="dropdown"><Link to="/design"><span>Website Design</span> <i className="bi bi-chevron-right"></i></Link>
                <ul>
                  <li><Link to="/wordpress">WordPress Website</Link></li>
                  <li><Link to="/ecommerce">Ecommerce Website</Link></li>
                  <li><Link to="/customcms">Custom CMS Website</Link></li>
                </ul>
              </li>
              <li><Link to="/digital">Digital Marketing</Link></li>
              <li><Link to="/Creative">Creative Design</Link></li>
            </ul>
          </li>
          <li><Link className="nav-link scrollto " to="/portfolio">Portfolio</Link></li>
          <li><Link className="nav-link scrollto" to="/contact">Contact</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    </>
  )
}

export default Navbar