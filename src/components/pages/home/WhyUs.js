import React from 'react';
import { Link } from 'react-router-dom';


const WhyUs = () => {
  return (
    <>
    
    <section id="why-us" className="why-us">
      <div className="container">

        <div className="row">
          <div className="col-xl-4 col-lg-5" data-aos="fade-up">
            <div className="content">
              <h3>Why Choose StepUp Software?</h3>
              <p>
              With our approach to Web Design, our methods continue to be proven in a continuous challenging marketplace with delivering what we promise.
              </p>
              <div className="text-center">
                <Link to="/about" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></Link>
              </div>
            </div>
          </div>

          
          <div className="col-xl-8 col-lg-7 d-flex">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-bulb"></i>
                    <h4>We are creative team</h4>
                    <p>With our approach to Web Design, our methods continue to be proven in a continuous challenging marketplace with delivering what we promise.</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-star"></i>
                    <h4>Five-star support team</h4>
                    <p>Our Support Forum is at your disposal at any time, 5 Star Assistance is offered within 48 hours</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-analyse"></i>
                    <h4>Fully Integrated service</h4>
                    <p>As a leading digital agency we are able to offer a fully integrated service beyond the initial website design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default WhyUs