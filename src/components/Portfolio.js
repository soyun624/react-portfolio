import React from 'react';
import './Portfolio.css';
import mangiare from '../images/mangiare.png';
import tvshow from '../images/tvshow.png';
import shoppingCart from '../images/shoppingCart.png';
import chatApp from '../images/chatApp.png'

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
            <ul>
                <li>HTML</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>Bootstrap</li>
            </ul>
            <b>Website:</b> <a className="hyper-link" onClick={()=> window.open("https://mangiare.netlify.app")}>https://mangiare.netlify.app</a>
            <br/>
            <b>GitHub:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/soyun624/italian-restaurant")}>https://github.com/soyun624/italian-restaurant</a>
            </>
        )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Restaurant Website",
              },
            },
          });
    }

    const openPopupboxPj2 = () =>{
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={tvshow} alt="TV Show site project" />
            <ul>
                <li>HTML</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>API</li>
            </ul>
            <b>Website:</b> <a className="hyper-link" onClick={()=> window.open("https://soyun-tvshow.netlify.app")}>https://soyun-tvshow.netlify.app</a>
            <br/>
            <b>GitHub:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/soyun624/movie-site")}>https://github.com/soyun624/movie-site</a>
            </>
        )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "TV Show Website",
              },
            },
          });
    }

    const openPopupboxPj3 = () =>{
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={shoppingCart} alt="Shopping cart project" />
            <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Heroku</li>
            </ul>
            <b>Website:</b> <a className="hyper-link" onClick={()=> window.open("https://react-and-redux-shopping-cart.herokuapp.com/")}>https://react-and-redux-shopping-cart.herokuapp.com/</a>
            <br/>
            <b>GitHub:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/soyun624/react-shopping-cart")}>https://github.com/soyun624/react-shopping-cart</a>
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

    const openPopupboxPj4 = () =>{
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={chatApp} alt="Chat App project" />
            <ul>
                <li>Rest APIs</li>
                <li>React Hooks</li>
                <li>Sockets</li>
                <li>CSS</li>
            </ul>
            <b>Website:</b> <a className="hyper-link" onClick={()=> window.open("https://chat-app-soyun.netlify.app/")}>https://chat-app-soyun.netlify.app</a>
            <br/>
            <b>GitHub:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/soyun624/chat-app")}>https://github.com/soyun624/chat-app</a>
            </>
        )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Chat application",
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
                        <img className="portfolio-image" src={tvshow} alt="TV Show project"></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        
                    </div>
                
                    <div className="portfolio-image-box" onClick={openPopupboxPj3}>
                        <img className="portfolio-image" src={shoppingCart} alt="Shopping cart project"></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        
                    </div>
                
                    <div className="portfolio-image-box" onClick={openPopupboxPj4}>
                        <img className="portfolio-image" src={chatApp} alt="Chat App project"></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfig}/>
        </div>
    )
}

export default Portfolio
