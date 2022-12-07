import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <>
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="container" data-aos="fade-in">
      <h1>We Are Your Media Partner </h1>
      <div >
    
							</div>
     
      <h2>Hire us for your projects & result oriented digital marketing campaigns.  </h2>
      <div className="d-flex align-items-center">
        <i className="bx bxs-right-arrow-alt get-started-icon"></i>
        <Link to="/about" className="btn-get-started scrollto">Get Started</Link>
      </div>
    </div>
  </section>
    </>
  )
}

export default HeroSection