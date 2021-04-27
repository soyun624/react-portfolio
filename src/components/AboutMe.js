import React from 'react';
import './AboutMe.css';
import author from "../images/me.jpg";


const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author.." />

                    </div>
                    <img src="" alt="" />
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>Hello! I am Soyun, a web developer focused on crafting great web experiences. 
                    I’m a hard working and dedicated web developer with a keen eye for detail, and a determination to deliver the very highest quality. 
                    I take great pride in my work, and I always try to better myself with every project I work on.
                    I love what I do as every day there is something new and exciting to learn.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
