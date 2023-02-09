import React from 'react';
import { Link } from 'react-router-dom';

const Abt = () => {
    return (
        <>


            <section id="about" className="about section-bg">
                <div className="container">

                    <div className="row">
                        <div id="heroabt" className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative" data-aos="fade-right">
                            <Link to="https://www.youtube.com/watch?v=jDDaplaOz7Q" ></Link>
                        </div>

                        <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                            <h4 data-aos="fade-up">About us</h4>
                            <h3 data-aos="fade-up">We will help you to achieve your goals and to grow your business</h3>
                            <p data-aos="fade-up">
                            StepUp Software is a premium design agency that focuses on quality, innovation, & speed. We utilized technology to bring results to grow our clients businesses. We pride ourselves in great work ethic, integrity, and end-results. Throughout the years StepUp Software has been able to create stunning, award winning designs in multiple verticals while allowing our clients to obtain an overall better web presence.
                            </p>

                            <div className="icon-box" data-aos="fade-up">
                                <div className="icon"><i className="bx bx-fingerprint"></i></div>
                                <h4 className="title"><Link to=""> Philosophy </Link></h4>
                                <p className="description">Our company philosophy is to create the kind of website that most businesses want: easy to find, stylish and appealing, quick loading, mobile responsive and easy to buy from.</p>
                            </div>

                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon"><i className="bx bx-gift"></i></div>
                                <h4 className="title"><Link to="">Mission</Link></h4>
                                <p className="description">We’ve designed our entire process and products around providing everything a small businesses needs when they’re starting out – ensuring that working with us is always a quick, easy and hassle-free experience. We give our clients full control of their website without a ridiculous price tag, and our friendly team offers their expertise even after your website is live.</p>
                            </div>

                            {/* <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon"><i className="bx bx-atom"></i></div>
                                <h4 className="title"><Link to="">Dine Pad</Link></h4>
                                <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                            </div> */}

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Abt