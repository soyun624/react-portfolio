import React from 'react';
import './Portfolio.css';
import mangiare from '../images/mangiare.png';
import youtube from '../images/youtube.png';
import shoppingCart from '../images/shoppingCart.png';

//import font awsome
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons";

import {PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    const openPopupboxPj1 = () =>{
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={mangiare} alt="restaurant project" />
            <p> Italian restaurant wetsite
            </p>
            <b>GitHub:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/rowaxl/Mangiare")}>https://github.com/rowaxl/Mangiare</a>
            </>
        )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Restaurant Project",
              },
            },
          });
    }

    const openPopupboxPj2 = () =>{
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={youtube} alt="Youtube Clone project" />
            <p> Youtube Clone
            </p>
            <b>GitHub:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/soyun624/websiteClone")}>https://github.com/soyun624/websiteClone</a>
            </>
        )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Youtube Clone",
              },
            },
          });
    }

    const openPopupboxPj3 = () =>{
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={shoppingCart} alt="Shopping cart project" />
            <p> Shopping cart
            </p>
            <b>GitHub:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/arielcardoso/react-shopping-cart")}>https://github.com/arielcardoso/react-shopping-cart</a>
            </>
        )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Shopping cart",
              },
            },
          });
    }

    const popupboxConfig = {
        titleBar: {
            enable: true,
            text: "Project title"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxPj1}>
                        <img className="portfolio-image" src={mangiare} alt="Restautant project"></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                
                    <div className="portfolio-image-box" onClick={openPopupboxPj2}>
                        <img className="portfolio-image" src={youtube} alt="Youtube Clone project"></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                
                    <div className="portfolio-image-box" onClick={openPopupboxPj3}>
                        <img className="portfolio-image" src={shoppingCart} alt="Shopping cart project"></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                
                    {/* <div className="portfolio-image-box">
                        <img className="portfolio-image" src={mangiare} alt="Restautant project"></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div> */}
                </div>
            </div>
            <PopupboxContainer {...popupboxConfig}/>
        </div>
    )
}

export default Portfolio
