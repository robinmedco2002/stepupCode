import React from 'react';
import { Link } from 'react-router-dom';
import WhyusData from '../Data';

const Serv = () => {
  return (
    <>
    <section id="services" className="services section-bg">

      <div className="container">


    


        <div className="section-title" data-aos="fade-up">
          <h2> Our Services</h2>
          <p>We offer a wide range of Digital Marketing & Web Development Services. Our services include web design, web development, Social media marketing, SEO & more.</p>
        </div>

        <div className="row">
        {   WhyusData.map((data) => 
          <div className="col-lg-4 col-md-6" data-aos="fade-up" key={data.id}>
            <div className="icon-box">
              <div className="icon"><i className={data.whyusicon}></i></div>
              <h4 className="title"><Link to="/development"> {data.whyustitle}   </Link></h4>
              <p className="description">{data.whyusdesc}  </p>
              <div className="read-more"><Link to={data.whyuslink}><i className="bi bi-arrow-right"></i> {data.whyusreadmorebtn} </Link></div>
           
            </div>  
          </div>
        )}
    



        </div>
   
      </div>   
    </section>
    </>
  )
}

export default Serv