import React,{Component} from "react";
import logo from "../images/logo.jpg";
import NavigationBar from "./NavigationBar";
import service from "../images/service.jpg";
import axios from 'axios';

const Service = props => (
        <li>{props.services.service_name}</li>
)

class Services extends React.Component{

    constructor(props) {
        super(props);
        this.state = {services: []};
    }

    componentDidMount() {
        window.dispatchEvent(new CustomEvent("navigationhandler"));

        axios.get('http://localhost:5005/services/')
            .then(response => {
                this.setState({ services: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    serviceList() {
        return this.state.services.map(currentservice => {
            return <Service services={currentservice} key={currentservice._id}/>;
        })
    }

    render() {

        return(
            <div>
                <img src={logo} alt="DICE" className="rest-logo"/>
                <NavigationBar/>
                <img src={service} alt="DICEService" className="imgAbout" />
                <div className="about-container">
                    <div className="about-head">
                        <h3>Services:</h3>
                    </div>
                    <div className="services ul">
                        <ul>
                            {this.serviceList()}
                        </ul>
                        {/*<ul>
                            <li>Concept Validation</li>
                            <li>Process Optimization</li>
                            <li>Big Data Storage, Aggregation and Analytics</li>
                            <li>Automation of Systems</li>
                            <li>Digital Analytical Services</li>
                            <li>Network Analysis</li>
                            <li>Prototype Development</li>
                            <li>Proof of Concept</li>
                            <li>Software Design and Project Management</li>
                            <li>IoT Sensor Integration</li>
                            <li>Predictive Maintenance</li>
                            <li>Data Integration</li>
                            <li>AI / ML / Deep Learning</li>
                            <li>Customized Training</li>
                            <li>Drone / Autonomous Vehicle Development</li>
                            <li>Virtual, Mixed and Augmented Reality</li>
                            <li>Software Re-Design and Improvement</li>
                            <li>Cyber Security</li>
                        </ul>
*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;