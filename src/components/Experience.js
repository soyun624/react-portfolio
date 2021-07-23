import React from 'react';
import './Experience.css';
import Particles from './particles'


const Experience = () => {
    return (
        <div id="experience" className="experience">

            <div className="d-flex justify-content-center my-5">
                <h1>experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-left">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2015-2016, 2018</h3>
                            <h5>Freelance Web Developer</h5>
                            <p>Developed of gift certificate system based on block chain and company's facility information management system.
                            </p>
                            <p><span style={{fontWeight:'bold'}}>Technical Specifications : </span>Java,  Javascript, Oracle, OZ Application</p>
                            
                        </div>
                    </div>
                    <div className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2014-2015</h3>
                            <h5>Freelance Web Developer</h5>
                            <p>Managed IT maintenance of the POSCO group online blog and renovated intranet.
                            </p>
                            <p><span style={{fontWeight:'bold'}}>Technical Specifications : </span>Java, Jsp, Oracle, JQuery, Mybatis</p>
                            
                        </div>
                    </div> 
                    <div className="timeline-block timeline-block-left">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2012-2013</h3>
                            <h5>Freelance Web Developer</h5>
                            <p className="indent">- Developed the Recruitment HR website used as a job application and candidate's notification system as well as for posting employment advertisements, Maintained HR personnel management system and multi-browser processing.</p>
                            <p className="indent">- Maintained of Samsung Electronics Logitech HR system and developed management evaluation system.</p>
                            
                            <p><span style={{fontWeight:'bold'}}>Technical Specifications : </span>Java, Jsp, Javascript, Oracle, Tibero, Anyframe, Ajax, Jstl</p>
                            
                        </div>
                    </div>
                    <div className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2008-2011</h3>
                            <h5>Web Developer</h5>
                            <p>Development and maintenance of the appropriate construction cost calculation system of the Korea Institute of Civil Engineering and Building Technology.
                            </p>
                            <p><span style={{fontWeight:'bold'}}>Technical Specifications : </span>Java, Jsp, Javascript, Oracle</p>
                        </div>
                    </div>

            </div>

            
        </div>
    )
}

export default Experience
