import React,{Component} from "react";
import logo from "../images/logo.jpg";
import NavigationBar from "./NavigationBar";

class Welcome extends React.Component{
    render() {
        return(
            <div>
                <img src={logo} alt="DICE" className="rest-logo" />
                <NavigationBar/>

                <div className="container">
                    <div className="container-head fadeInUpBig">
                        <h3>Digital Integration Centre of Excellence:</h3>
                    </div>
                    <div className="container-para fadeIn">
                        <p>
                            The Digital Integration Centre of Excellence (DICE) is a research lab within Saskatchewan Polytechnic's
                            School of Information and Communication Technology. We work collaboratively with multiple programs to
                            bring digital solutions for our various industrial partners. Our core focus is on data. This involves
                            data integrity, the transmission thereof, along with analysis and storage aspects.
                        </p>
                        <p>
                            Within this focus, we look at three different aspects of how data interacts within an organization.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;