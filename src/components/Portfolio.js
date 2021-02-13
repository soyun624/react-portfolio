import React from 'react';
import './Portfolio.css';
import mangiare from '../images/mangiare.png';
import mangiare2 from '../images/mangiare.png';
import mangiare3 from '../images/mangiare.png';

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
            <p>project1
                sfzloren i[fmgfk fdg]vkkxnvkshdvkv
                sfkhnkdkfhvv
            </p>
            <b>GitHub:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/rowaxl/Mangiare")}>https://github.com/rowaxl/Mangiare</a>
            </>
        )
        PopupboxManager.open({content});
    }

    const popupboxConfigPj1 = {
        titleBar: {
            enable: true,
            text: "Restaurant project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxPj2 = () =>{
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={mangiare} alt=" project" />
            <p>project2
                sfzloren i[fmgfk fdg]vkkxnvkshdvkv
                sfkhnkdkfhvv
            </p>
            <b>GitHub:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/rowaxl/Mangiare")}>https://github.com/rowaxl/Mangiare2</a>
            </>
        )
        PopupboxManager.open({content});
    }

    const popupboxConfigPj2 = {
        titleBar: {
            enable: true,
            text: "project2"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxPj3 = () =>{
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={mangiare} alt="restaurant project" />
            <p>project3
                sfzloren i[fmgfk fdg]vkkxnvkshdvkv
                sfkhnkdkfhvv
            </p>
            <b>GitHub:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/rowaxl/Mangiare")}>https://github.com/rowaxle</a>
            </>
        )
        PopupboxManager.open({content});
    }

    const popupboxConfigPj3 = {
        titleBar: {
            enable: true,
            text: "project3"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxPj1}>
                        <img className="portfolio-image" src={mangiare} alt="Restautant project"></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                
                    <div className="portfolio-image-box" onClick={openPopupboxPj2}>
                        <img className="portfolio-image" src={mangiare2} alt="Restautant project"></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                
                    <div className="portfolio-image-box" onClick={openPopupboxPj3}>
                        <img className="portfolio-image" src={mangiare3} alt="Restautant project"></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={mangiare} alt="Restautant project"></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigPj1}/>
            <PopupboxContainer {...popupboxConfigPj2}/>
            <PopupboxContainer {...popupboxConfigPj3}/>
        </div>
    )
}

export default Portfolio
