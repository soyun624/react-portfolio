import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-scroll";


function ToggleNavBar () {
  let element = document.getElementsByClassName( 'navbar-toggler' )[ 0 ];
  if ( element.getAttribute( 'aria-expanded' ) == 'true' ) {
      element.click();
  }
}


const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="/#">SOYUN</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link smooth={true} to="home" className="nav-link" data-toggle="collapse" onClick={ToggleNavBar} href="/#">Home
                  <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link smooth={true} to="about" offset={-75} className="nav-link" href="/#" onClick={ToggleNavBar}>about me</Link>
                </li>
                <li className="nav-item">
                  <Link smooth={true} to="experience" offset={-75} className="nav-link" href="/#" onClick={ToggleNavBar}>experience</Link>
                </li>
                <li className="nav-item">
                  <Link smooth={true} to="portfolio" offset={-65} className="nav-link" href="/#" onClick={ToggleNavBar}>portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link smooth={true} to="contact" offset={-75} className="nav-link" href="/#" onClick={ToggleNavBar}>contact</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar