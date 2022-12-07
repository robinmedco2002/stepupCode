import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PortfolioData from './data/PortfolioData';

const Portfolio = () => {
const [profileitem, setProfileitem] = useState(PortfolioData);

const filterItem = (portfolioItem) => {
  const updateItems = PortfolioData.filter((currentitem) => {
    return currentitem.category === portfolioItem;
  });
  setProfileitem (updateItems);
}

  return (
    <>
    
    <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title">
          <h2 data-aos="fade-up">Portfolio</h2>
          <p data-aos="fade-up">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active" onClick={() => setProfileitem(PortfolioData)}>Show All</li>
              <li data-filter=".filter-app" onClick={() => filterItem('creatives')}>Creatives</li>
              <li data-filter=".filter-card" onClick={() => filterItem('ecommerce')}>eCommerce</li>
              <li data-filter=".filter-web" onClick={() => filterItem('booking')}>Online Booking</li>
              <li data-filter=".filter-web" onClick={() => filterItem('learning')}>Online Learning</li>
              <li data-filter=".filter-web" onClick={() => filterItem('wordpress')}>WordPress</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">


{
  profileitem.map((port) => {
    const {id, image, name, description, link } = port;
    return (

      
    

<div className="col-lg-4 col-md-6 portfolio-item filter-app" key={id}>
<Link to ={link} target="_blank" className="details-link " title="More Details">
<img src={image}  to= {link} className="img-fluid" alt="" /> 
</Link>
  
  <div className="portfolio-info ">
    <h4>{name}</h4>
    <p>{description}</p>
      <Link to ={link} className="details-link " title="More Details"><i className="bx bx-link"></i></Link>
  </div>
</div>


    )
  })
}






        {/* <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info col-lg-4 col-md-5">
              <h4>App 1</h4>
              <p>App</p>
                <Link to ="portfolio-details.html" className="details-link " title="More Details"><i className="bx bx-link"></i></Link>
            </div>
          </div> */}





      {/*      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <Link to ="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></Link>
              <Link to ="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
            </div>
          </div>

         <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <Link to ="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></Link>
              <Link to ="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <Link to ="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></Link>
              <Link to ="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <Link to ="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></Link>
              <Link to ="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <Link to ="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></Link>
              <Link to ="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <Link to ="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></Link>
              <Link to ="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <Link to ="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></Link>
              <Link to ="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <Link to ="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></Link>
              <Link to ="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
            </div>
          </div> */}

        </div>

        </div>
    </section>
    
    </>
   

)
  }

export default Portfolio;