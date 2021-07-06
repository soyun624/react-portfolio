import React from 'react';
import './Footer.css';
import {FacebookShareButton,
        FacebookIcon,
        TwitterShareButton,
        TwitterIcon,
        LinkedinShareButton,
        LinkedinIcon} 
    from "react-share";
import {Link} from "react-scroll";

const Footer = () => {
    return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="d-flex">
                                <p>Vancouver, BC</p>
                            </div>
                            <div className="d-flex">
                                <a href="tel:778-906-0545">+1(778)215-2128</a>
                            </div>
                            <div className="d-flex">
                                <p>soyunlee624@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-6">
                            <div className="row">
                                <div className="col">
                                    <Link smooth={true} to="home" className="footer-nav" href="/#">Home</Link>
                                    <br/>
                                    <Link smooth={true} to="about" offset={-80} className="footer-nav" href="/#">About me</Link>
                                    <br/>
                                    <Link smooth={true} to="experience" offset={-75} className="footer-nav" href="/#">Experience</Link>
                                </div>
                                <div className="col">
                                    <Link smooth={true} to="portfolio" offset={-80} className="footer-nav" href="/#">Portfolio</Link>
                                    <br/>
                                    <Link smooth={true} to="contact" offset={-80} className="footer-nav" href="/#">Contact</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-6 align-tems-center">
                            <div className="d-flex justify-content-center mt-3">
                                <FacebookShareButton
                                    url={"https://github.com/soyun624/react-portfolio"}
                                    quote={"Portfolio"}
                                    hashtag="#react"
                                >
                                    <FacebookIcon className="mx-3" size={36} />
                                </FacebookShareButton>
                                <TwitterShareButton
                                    url={"https://github.com/soyun624/react-portfolio"}
                                    quote={"Portfolio"}
                                    hashtag="#react"
                                >
                                    <TwitterIcon className="mx-3" size={36} />
                                </TwitterShareButton>
                                <LinkedinShareButton
                                    url={"https://github.com/soyun624/react-portfolio"}
                                    quote={"Portfolio"}
                                    hashtag="#react"
                                 >
                                    <LinkedinIcon className="mx-3" size={36} />
                                </LinkedinShareButton>
                            </div>

                            <p className="pt-3 text-center">
                                Copyright&copy;
                                {new Date().getFullYear()}&nbsp; | All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}

export default Footer
