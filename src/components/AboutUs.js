import React, {Component} from "react";
import logo from "../images/logo.jpg";
import imgabout from "../images/imgabout.png";
import NavigationBar from "./NavigationBar";

class AboutUs extends React.Component{

    componentDidMount() {
        window.dispatchEvent(new CustomEvent("navigationhandler"));
    }

    render() {
        return(
            <div>
                <img src={logo} alt="DICE" className="rest-logo"/>
                <NavigationBar/>
                <img src={imgabout} alt="DICEAbout" className="imgAbout" />
                <div className="about-container">
                    <div className="about-head">
                        <h3>About Us:</h3>
                    </div>
                    <div>
                        <p>Data stewardship is key to the services that DICE offers. DICE users AI and ML techniques to
                            obtain patterns that exist in the data. Those patterns become the information that provides
                            insights to our industry partners. AI and ML are broad topics, so DICE has focused its work on three
                            key areas:
                        </p>
                        <p className="about-display-hover-para">1) Asset Management(AM)</p>
                        <div className="about-display-para">
                            Aging assets and the impending retirement of many experienced professionals are among the issues
                            facing many companies today. In addition, unexpected downtime costs industries billions of dollars each year.
                            Businesses are increasingly looking to advanced AI and ML strategies and to the IoT for solutions to such problems.
                            DICE researchers apply condition monitoring and predictive maintenance to IoT technologies embedded in heavy
                            assets by combining data acquisition, analytics, edge computing, mobile computing, cyber security, and software technology platforms.
                            Their solutions allow businesses to make better decisions relating to the ongoing operation and maintenance of assets.
                        </div>
                        <p className="about-display-hover-para">2) Time Sensitive Networking(TSN)</p>
                        <div className="about-display-para">
                            Time Sensitive Networking is key for industrial applications, such as process and machine control.
                            Researchers apply AI and ML techniques within time-sensitive contexts, ensuring that data can be acted
                            upon immediately when required.
                        </div>
                        <p className="about-display-hover-para">3) Mesh Networks(MN)</p>
                        <div className="about-display-para">
                            “Mesh” is the rich interconnection among smart devices or nodes consisting of mesh clients, mesh routers
                            and gateways in a relatively stable topology.  DICE researchers focus on open technologies that can help monitor and
                            control mesh networks at the cloud edge, while maintaining security, scalability, and interoperability between different vendors
                            and protocol standards.  Their work allows companies to increase resiliency and ease integration of distributed resources. Rural
                            connectivity projects, such as one being developed  with Sasktel that aims to create virtual cattle fences to aid in rotational grazing,
                            require the creation of networks in isolated areas at low cost. Developing such applications requires computer-based skills, a robust network,
                            and faculty/students from our veterinary technology program to help perform the validation testing with livestock.
                        </div>
                        <p>
                            Techniques used to find patterns transcend sector-specific solutions – allowing,
                            for example, for strategies learned on automotive assembly lines to be applied to ore processing
                            or autonomous weeding. In each of these three areas, students in such fields as
                            information technology (IT), mining, geographic information systems (GIS), Electronic Systems Engineering
                            Technology ESET, and mechanical technology (MechTech) work with researchers as they investigate
                            possible solutions, gaining valuable experience in data management and acquiring advanced skill sets.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;