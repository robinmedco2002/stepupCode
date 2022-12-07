import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { Avatar } from '@mui/material';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { borderColor } from '@mui/system';

const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    
    return (
      <div className={className} onClick={onClick}>
        <ChevronLeftIcon style={{ color: "#fff", fontSize: "45px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
      
        <ChevronRightIcon style={{ color: "#fff", fontSize: "45px" }} />
      </div>
    );
  };

const testomonial = () => {
  return (
    <div
    className="testimonial"
    style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
  >
    <div style={{ width: "50%", textAlign: "center", color: "#FFF", zIndex: "999", }}>
      <h1 style={{ marginBottom: 20,  fontWeight: "600" }}>TESTIMONIALS</h1>
      <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
        <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
        <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
        <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
      </Slider>
    </div>
  </div>
);
};

const Card = ({ img }) => {
return (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
      color: "#FFF", 
      zIndex: "999",
      fontStyle: "italic",
      fontSize: "18px"
    }}
  >
    <Avatar
      imgProps={{ style: { borderRadius: "50%" } }}
      src={img}
      style={{
        width: 120,
        height: 120,
        border: "4px solid rgb(248, 246, 246, 0.2)",
        padding: 2.5,
        marginBottom: 20,  
       
      }}
    />
    <p>
    <i className="bx bxs-quote-alt-left quote-icon-left"></i> <span>
      Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
      Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
      tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
      fringilla massa. Etiam hendrerit dolor eget rutrum </span>
      <i className="bx bxs-quote-alt-right quote-icon-right"></i>

    </p>
    <p style={{ fontStyle: "italic", marginTop: 25 }}>
      <span style={{ fontWeight: 700, color: "#ff5821" }}>PAULA WILSON</span> ,
      Media Analyst
    </p>
  </div>
);
};


export default testomonial