import React, {Component} from "react";
import logo from "../images/logo.jpg";
import NavigationBar from "./NavigationBar";
import contact from "../images/contactus.jpg";

class ContactUs extends React.Component{

    componentDidMount() {
        window.dispatchEvent(new CustomEvent("navigationhandler"));
    }

    render() {
        return(
            <div>
                <img src={logo} alt="DICE" className="rest-logo"/>
                <NavigationBar/>
                <img src={contact} alt="DICEContact" className="imgAbout" />
                <div className="about-container">
                    <div className="about-head">
                        <h3>Contact Us:</h3>
                    </div>
                    <div className="contact-content">
                        <div className="contact-content h3">
                            <h3>Email: <span>dice@saskpolytech.ca</span></h3>
                            <h3>Telephone Number: <span>1(306)111-1111</span></h3>
                            <h3>Address: <span>Saskatchewan Polytechnic, Saskatoon</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;