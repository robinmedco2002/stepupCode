import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <>
  
  {/* ======= Top Bar ======= */}

  <section id="topbar" className="d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope d-flex align-items-center"><Link to ="mailto:contact@example.com">contact@stepupsoft.com</Link></i>
        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+91 9818771015</span></i>
      </div>

      <div className="cta d-none d-md-flex align-items-center">
        <Link to ="/about" className="scrollto">REQUEST A QUOTE </Link>
      </div>
    </div>
  </section>

    </>
  )
}

export default TopBar