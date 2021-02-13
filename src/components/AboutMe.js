import React from 'react';
import './AboutMe.css';
import author from "../images/me.jpg";


const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author.." />

                    </div>
                    <img src="" alt="" />
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>Hello! loremds fdkjkvh dfvifv df bskdbi ukdjsh fsgu kdfkbsd fkjbsdkfjbskd jbcksdfsdfsdfssdsv
                    Hello! loremds fdkjkvh dfvi fv df bskdbi ukdjsh fsgu kdfkbsd fkjbs dkfjbskd jbcksdfsdfsdfssdsv
                    </p>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
