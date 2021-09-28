import React from 'react';
import Typed from "react-typed";
import {Link} from "react-scroll";
import Video from '../images/video_bg.mp4';

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <video autoPlay loop muted src={Video} type='video/mp4'> </video>
            <div className="main-info">
                
                <Typed
                    className="typed-text"
                    strings={["Hello! <br> I'm Soyun, <br> Web developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} to="contact" offset={-80} className="btn-main-offer" href="/#">contact me</Link>
                
            </div>
        </div>
    )
}

export default Header
