import React from 'react';
import Typed from "react-typed";
import {Link} from "react-scroll";

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>web development and websites promotions</h1>
                <Typed
                    className="typed-text"
                    // strings={["Web Design", "Web Development", "Facebook Ads AMM", "Google Ads"]} 
                    strings={["Welcome to my portfolio."]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} to="contact" offset={-80} className="btn-main-offer" href="/#">contact me</Link>
                {/* <a href="#" className="btn-main-offer" >contact me </a> */}
            </div>
        </div>
    )
}

export default Header
