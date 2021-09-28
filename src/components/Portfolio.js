import React from 'react';
import ReactPlayer from 'react-player'
import './Portfolio.css';
// import mangiare from '../images/mangiare.mov';
import thumbnail_mangiare from '../images/thumbnail_mangiare.png';
import tvshow from '../images/tvshow.mov';
import thumbnail_tvshow from '../images/thumbnail_tvshow.png';
import cosmetic from '../images/cosmetic.mov';
import thumbnail_cosmetic from '../images/thumbnail_cosmetic.png';
import kiosk from '../images/kiosk.mov';
import thumbnail_kiosk from '../images/thumbnail_kiosk.png';
import tetris from '../images/tetris.mov';
import thumbnail_tetris from '../images/thumbnail_tetris.png';
import portfolio from '../images/portfolio.mov'
import thumbnail_portfolio from '../images/thumbnail_portfolio.png'


//import font awsome
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons";

import {PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {

    // const openPopupboxRestaurant = () =>{
    //     const content = (
    //         <>
    //         <img className="portfolio-image-popupbox" src={mangiare} alt="restaurant project" />
    //         <ul>
    //             <li>HTML</li>
    //             <li>Javascript</li>
    //             <li>CSS</li>
    //             <li>Bootstrap</li>
    //         </ul>
    //         <a className="hyper-link" onClick={()=> window.open("https://mangiare.netlify.app")}><b>Website</b></a>
    //         <br/>
    //         <a className="hyper-link" onClick={()=> window.open("https://github.com/soyun624/italian-restaurant")}><b>GitHub</b></a>
    //         </>
    //     )
    //     PopupboxManager.open({content});
    //     PopupboxManager.update({
    //         content,
    //         config: {
    //           titleBar: {
    //             text: "Restaurant Website",
    //           },
    //         },
    //       });
    // }

    const openPopupboxMovie = () =>{
        const content = (
            <>
            <ReactPlayer url={tvshow} width="100%" controls/>
            <ul>
                <li>HTML</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>API</li>
            </ul>
            <a className="hyper-link" onClick={()=> window.open("https://soyun-tvshow.netlify.app")}><b>Website</b> </a>
            <br/>
            <a className="hyper-link" onClick={()=> window.open("https://github.com/soyun624/movie-site")}><b>GitHub</b></a>
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

    const openPopupboxEcommerce = () =>{
        const content = (
            <>
            <ReactPlayer url={cosmetic} width="100%" controls/>
            <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Material UI</li>
                <li>Commerce.js</li>
                <li>stripe</li>
            </ul>
            <a className="hyper-link" onClick={()=> window.open("https://nature-cosmetic.netlify.app/")}><b>Website</b> </a>
            <br/>
            <a className="hyper-link" onClick={()=> window.open("https://github.com/soyun624/cosmetic-website")}><b>GitHub</b></a>
            </>
        )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "E-commerce",
              },
            },
          });
    }

    const openPopupboxKiosk = () =>{
        const content = (
            <>
            <ReactPlayer url={kiosk} width="100%" controls/>
            <ul>
                <li>React.js</li>
                <li>Context API</li>
                <li>Material UI</li>
                <li>Node.Js</li>
                <li>MongoDB</li>
            </ul>
            <a className="hyper-link" onClick={()=> window.open("https://burger-order-kiosk.herokuapp.com/")}><b>Website</b></a>
            <br/>
            <a className="hyper-link" onClick={()=> window.open("https://github.com/soyun624/self-order-kiosk")}><b>GitHub</b> </a>
            </>
        )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Self order kiosk",
              },
            },
          });
    }

    const openPopupboxGame = () =>{
        const content = (
            <>
            <ReactPlayer url={tetris} width="100%" controls/>
            <ul>
                <li>Html</li>
                <li>Javascript</li>
                <li>CSS</li>
            </ul>
            <a className="hyper-link" onClick={()=> window.open("https://soyun-tetris-game.netlify.app")}><b>Website</b> </a>
            <br/>
            <a className="hyper-link" onClick={()=> window.open("https://github.com/soyun624/tetris")}><b>GitHub</b></a>
            </>
        )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Tetris Game",
              },
            },
          });
    }

    const openPopupboxPortfolio = () =>{
        const content = (
            <>
            <ReactPlayer url={portfolio} width="100%" controls/>
            <ul>
                <li>React</li>
                <li>React Hooks</li>
                <li>Bootstrap</li>
                <li>Html</li>
                <li>CSS</li>
            </ul>
            <a className="hyper-link" onClick={()=> window.open("https://soyun-portfolio.netlify.app/")}><b>Website</b> </a>
            <br/>
            <a className="hyper-link" onClick={()=> window.open("https://github.com/soyun624/react-portfolio")}><b>GitHub</b></a>
            </>
        )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Personal Website",
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
                    <div className="portfolio-image-box" onClick={openPopupboxKiosk}>

                        <img className="portfolio-image" src={thumbnail_kiosk} alt="Self order kiosk project"></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        
                    </div>
               
                    <div className="portfolio-image-box" onClick={openPopupboxEcommerce}>
                        <img className="portfolio-image" src={thumbnail_cosmetic} alt="E-Commerce project"></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        
                    </div>
                
                    {/* <div className="portfolio-image-box" onClick={openPopupboxRestaurant}>
                        <img className="portfolio-image" src={thumbnail_mangiare} alt="Restautant project"></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        
                    </div> */}
                
                    <div className="portfolio-image-box" onClick={openPopupboxMovie}>
                        <img className="portfolio-image" src={thumbnail_tvshow} alt="TV Show project"></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxGame}>
                        <img className="portfolio-image" src={thumbnail_tetris} alt="Tetris Game project"></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
                        <img className="portfolio-image" src={thumbnail_portfolio} alt="Portfolio project"></img>
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
