import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../su_logo.png'

const Footer = () => {
  return (
    <>

 {/* -- ======= Footer =======  */}

 <div id="footer">

<div className="footer-top">
  <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-6 footer-contact">
      <span>
      <br /><br />
      <a href="/">
          <img src= {logo} style={{width:220, marginTop: -10}} />
          </a>
      </span>

        {/* <h3>StepUp Software</h3> */}
        <br /><br />   <br />
          {/* Preet Vihar <br />
          New Delhi <br />
          India <br /><br/> */}
          <p style={{ "fontWeight": "600", 'color':'#635551', "fontFamily": "Poppins"}}>
          <strong>Phone:</strong> +91 9818771015<br/>
          <strong>Email:</strong> info@stepupsoft.com<br/>
          </p>
      </div>

      <div className="col-lg-2 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i className="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
          <li><i className="bx bx-chevron-right"></i> <Link to="/about">About us</Link></li>
          <li><i className="bx bx-chevron-right"></i> <Link to="/portfolio">Portfolio</Link></li>
          <li><i className="bx bx-chevron-right"></i> <Link to="/contact">Contact Us</Link></li>
        
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><i className="bx bx-chevron-right"></i> <Link to="/design">Web Design</Link></li>
          <li><i className="bx bx-chevron-right"></i> <Link to="/development">Web Development</Link></li>
    
          <li><i className="bx bx-chevron-right"></i> <Link to="/digital">Digital Marketing</Link></li>
          <li><i className="bx bx-chevron-right"></i> <Link to="/creative">Creative Design</Link></li>
        </ul>
      </div>

      <div className="col-lg-4 col-md-6 footer-newsletter">
        <h4>Join Our Newsletter</h4>
        <p>Join our Monthly Newsletter for new design and creative ideas and offers</p>
        <form action="" method="post"> 
        <input type="email" name="email" placeholder='Your Email Id' />
        <input type="submit" value="Subscribe" /> 
        </form>
         
         
      </div>

    </div>
  </div>
</div>

<div className="container d-lg-flex py-4">

  <div className="me-lg-auto text-center text-lg-start">
  <p>
    <div className="copyright"> 
   
    2023
      &copy; Copyright <strong><span>StepUp Software</span></strong>. All Rights Reserved
      
    </div>
    <div className="credits">
    
      Designed by <Link to="/">StepUp Software</Link>
    </div>
    </p>
  </div>
  <div className="social-links text-center text-lg-right pt-3 pt-lg-0">
    <Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link>
    <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
    <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
    <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
  </div>
</div>
</div>

    </>
  )
}

export default Footer;