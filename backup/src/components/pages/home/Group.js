import React from 'react';
import { Link } from 'react-router-dom';


const Group = () => {
  return (
    <>
    <section id="values" className="values">
      <div className="container">

        <div className="row">


          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div className="card" style= {{'backgroundImage': 'url(assets/img/values-1.jpg)'}} >
              <div className="card-body">
                <h5 className="card-title"><Link to=""> 
                <p style= {{ 'fontSize': '24px', 'fontWeight': 'bold'}}> DESIGN   
                 GROUP </p></Link></h5>
                <p className="card-text">With our in-house award winning designers, we recognize the fact that usability, functionality and visualization are three of the most important factors when designing interfaces or web sites. Using this strategy, we work with you to ensure that your messaging and marketing goals are realized with the designs we create. We will work with you and bring your idea to life.</p>
              </div>
            </div>
          </div>


          <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="100">
            <div className="card" style= {{'backgroundImage': 'url(assets/img/values-2.jpg)'}}>
              <div className="card-body">
                <h5 className="card-title"><Link to="">
                <p style= {{ 'fontSize': '24px', 'fontWeight': 'bold'}}> DEVELOPMENT 
                 GROUP </p> </Link></h5>
                <p className="card-text">As a leading mobile application development company, iSmart Infosoft has extensive experience in creating high performance, feature-packed native mobile applications for all the major mobile platforms including iOS, Android, BlackBerry OS and Windows Mobile. iSmart Infosoft mobile app developers can create the right app that will meet your business, industry and/or vertical needs.</p>
                 </div>
            </div>

          </div>
         
        
        </div>

      </div>
    </section>
    </>
  )
}

export default Group