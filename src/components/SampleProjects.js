import React, {Component} from "react";
import logo from "../images/logo.jpg";
import sampleproject from "../images/sampleprojects.PNG";
import NavigationBar from "./NavigationBar";
import axios from "axios";

const SampleProject1 = props => (
    <ul>
    <h2 className="about-display-hover-para"><li>{props.samples.project_name}</li></h2>
    <div className="about-display-para">
        {props.samples.project_description}
    </div>
    </ul>

)

class SampleProjects extends React.Component{

    constructor(props) {
        super(props);

        this.state = {samples: []};
    }

    componentDidMount() {
        window.dispatchEvent(new CustomEvent("navigationhandler"));

        axios.get('http://localhost:5005/projects/')
            .then(response => {
                this.setState({ samples: response.data })
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    sampleprojectsList() {
        return this.state.samples.map(currentsample => {
            return <SampleProject1 samples={currentsample} key={currentsample._id}/>;
        })
    }


    render() {
        return(
            <div>
                <img src={logo} alt="DICE" className="rest-logo"/>
                <NavigationBar/>
                <img src={sampleproject} alt="DICEAbout" className="imgAbout" />
                <div className="sample-project-container">
                    <div className="about-head">
                        <h3>Sample Projects:</h3>
                    </div>

                    <div className="services-offered-head">
                            {this.sampleprojectsList()}
                    </div>
                </div>
            </div>
        );
    }
}


export default SampleProjects;