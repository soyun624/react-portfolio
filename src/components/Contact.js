import React, {useState} from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import {useForm} from "react-hook-form";

const Contact = () => {
    const[successMessage, setSuccessMessage] = useState("");
    const {register, handleSubmit, errors} = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_QrHwu8FakPMfGJfoEyyRM";

    const onSubmit = (data, r) =>{
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }
    const sendEmail = (serviceID, templateID, variables, userID) => {
        // e.preventDefault();
    
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Form sent successfully!");
         
          }).catch(err => console.error(`Something went wrong ${err}`));
      }

    return (
        <div id="contact" className="contact">
            <div className="text-center">
                <h1>contact me</h1>
                <p>Please fill out the form and I'll contact you as soon as possible.</p>
                <span className="successMessage">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <input type="text"
                            className="form-control" 
                            placeholder="Name" 
                            name="name"
                            ref={
                                register({
                                    required: "Please enter your name",
                                    maxLength: {
                                        value: 20,
                                        message: "Name can be max 20 characters long"

                                    }
                                })
                            }
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>

                        <div className="text-center">
                            <input type="text"
                            className="form-control" 
                            placeholder="Phone Number" 
                            name="phone"
                            ref={
                                register({
                                    required: "Please add your phon number",
                                    
                                })
                            }
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.phone && errors.phone.message}
                        </span>

                        <div className="text-center">
                            <input type="email"
                            className="form-control" 
                            placeholder="Email" 
                            name="email"
                            ref={
                                register({
                                    required: "Please add your email",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid Email"
                                    }
                                })
                            }
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>

                        <div className="text-center">
                            <input type="text"
                            className="form-control" 
                            placeholder="Subject" 
                            name="subject"
                            ref={
                                register({
                                    required: "Please add subject",
                                    
                                })
                            }
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                    </div>

                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <textarea type="text"
                            className="form-control"
                            placeholder="Message"
                            name="Message"
                            ref={
                                register({
                                    required: "Please add message",
                                    
                                })
                            }
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.description && errors.description.message}
                        </span>

                        <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>

    )
}

export default Contact
