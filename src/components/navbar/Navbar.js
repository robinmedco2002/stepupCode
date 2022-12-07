import React from 'react';
// import {  NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Container} from 'react-bootstrap'


const StepupNavbar = () => {
  return (
    <>
  
  <Navbar collapseOnSelect bg="light" expand="lg" sticky="top">
  <Container>
        <Navbar.Brand href="/"><h1> Step<span>Up</span> Software</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
            <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
   
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/development">Web & Mobile Development</NavDropdown.Item>

              {/* <NavDropdown title="Website Design" id="collasible-nav-dropdown"> */}
                  <NavDropdown.Item href="/wordPress">WordPress Website</NavDropdown.Item>
                  <NavDropdown.Item href="/ecommerce"> Ecommerce Website </NavDropdown.Item>
                  <NavDropdown.Item href="/customcms">Custom CMS Website</NavDropdown.Item>
              {/* </NavDropdown> */}

              <NavDropdown.Item href="/digital"> Digital Marketing </NavDropdown.Item>
              <NavDropdown.Item href="/Creative">Creative Design</NavDropdown.Item>
                        
            </NavDropdown>

            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>    

        
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">  Dank memes  </Nav.Link>
          </Nav> */}

        </Navbar.Collapse>
      </Container>
    </Navbar>

  
    </>
  )
}

export default StepupNavbar