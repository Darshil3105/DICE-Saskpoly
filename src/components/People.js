import React, {Component} from "react";
import logo from "../images/logo.jpg";
import NavigationBar from "./NavigationBar";
import people from "../images/people.PNG";
import profilephoto from "../images/profilephoto.png";

class People extends React.Component{

    componentDidMount() {
        window.dispatchEvent(new CustomEvent("navigationhandler"));
    }

    render() {
        return(
            <div>
                <img src={logo} alt="DICE" className="rest-logo"/>

                <NavigationBar/>
                <img src={people} alt="DICEPeople" className="imgAbout" />
                <div className="about-container">
                    <div className="about-head">
                        <h3>Team Members:</h3>
                    </div>
                    <div className="services-offered-head">
                        <h2>TAC Director</h2>
                        <img src={profilephoto} alt="ProPic" className="rest-propic"/>
                    </div>
                    <div className="people-in-hierarchy">
                        <p>Dr. Terry Packham(Research Chair)</p>
                        <p>306-321-7485</p>
                        <p>Glacier Farm Media</p>
                        <div className="bottomBorder"/>
                    </div>

                    <div className="services-offered-head">
                        <h2>Research Associate</h2>
                        <img src={profilephoto} alt="ProPic" className="rest-propic"/>

                    </div>
                    <div className="people-in-hierarchy">

                        <p>Tanya Lung</p>
                        <p>639-321-7485</p>
                        <p>Glacier Farm Media</p>
                        <div className="bottomBorder"/>
                    </div>

                    <div className="services-offered-head">
                        <h2>Research Technician</h2>
                        <img src={profilephoto} alt="ProPic" className="rest-propic"/>

                    </div>
                    <div className="people-in-hierarchy">

                        <p>Brian Dyck</p>
                        <p>639-231-7485</p>
                        <p>Glacier Farm Media</p>
                        <div className="bottomBorder"/>
                    </div>

                    <div className="services-offered-head">
                        <h2>Research Intern</h2>
                        <img src={profilephoto} alt="ProPic" className="rest-propic"/>

                    </div>
                    <div className="people-in-hierarchy">

                        <p>Swapnil Patil</p>
                        <p>306-321-8440</p>
                        <p>Glacier Farm Media</p>
                        <div className="bottomBorder"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default People;