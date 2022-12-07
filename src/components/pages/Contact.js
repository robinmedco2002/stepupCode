import React from 'react'

const Contact = () => {
  return (
    <>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8619.642407857074!2d77.29589202559863!3d28.63485469299939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb5034037b69%3A0x833f7bdabb4ed317!2sPreet%20Vihar%2C%20Delhi%2C%20110092!5e0!3m2!1sen!2sin!4v1669647914819!5m2!1sen!2sin"
             title="myContactMap"    width="100%" height="450" style={{border:0}} allowFullScreen={true}  ></iframe>
               
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2 data-aos="fade-up">Contact Us</h2>
          
         <p data-aos="fade-up">  <h4 style={{ "fontWeight": "600", 'color':'#635551', "fontFamily": "Poppins"}}> GET IN TOUCH WITH US   <span style={{ 'color':'#ff5821'}}> NOW </span></h4>  </p>
        </div>

        <div className="row justify-content-center">

          <div className="col-xl-3 col-lg-4 mt-4" data-aos="fade-up">
            <div className="info-box">
              <i className="bx bx-map"></i>
              <h3>Our Address</h3>
              <p>B-4, Preet Vihar, INDIA</p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 mt-4" data-aos="fade-up" data-aos-delay="100">
            <div className="info-box">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>info@stepupsoft.com.com<br/>contact@stepupsoft.com</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 mt-4" data-aos="fade-up" data-aos-delay="200">
            <div className="info-box">
              <i className="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>+91 9818771015, 9818771015<br/>+91 9818771015</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="300">
          <div className="col-xl-9 col-lg-12 mt-4">
            <form action="forms/contact.php" method="post" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    
    

    </>
  )
}

export default Contact