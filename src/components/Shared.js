import React,{Component} from "react";
import logo from "../images/logo.jpg";
import NavigationBar from "./NavigationBar";
import shared from "../images/shared.jpg";
import download from "../images/download-icon.png";
import delicon from "../images/delete-icon.png";
import '../FileShare.css';
import {Link} from 'react-router-dom';
import {AuthContext} from "../contexts/AuthContext";

class Shared extends Component{
    static contextType = AuthContext;
    componentDidMount() {
        window.dispatchEvent(new CustomEvent("navigationhandler"));
    }

    render() {
        if(this.context.isAuthenticated) {
        return (
            <div>
                <img src={logo} alt="DICE" className="rest-logo"/>
                <NavigationBar/>
                <img src={shared} alt="FileSharing" className="imgAbout" />
                <div className="file-sharing-container">
                    <div className="about-head">
                        <h3>My Files:</h3>
                    </div>
                    <div className="file-sharing-link">
                        <div className="shared">
                            <Link to="/shared">Shared</Link>
                        </div>
                        <div className="toshare">
                            <Link to="/toshare">To Share</Link>
                        </div>
                    </div>
                    <div className="file-container">
                        <table>
                            <tr>
                                <th>Documents</th>
                                <th>Date</th>
                                <th>Shared From</th>
                                <th>Project Associated</th>
                            </tr>
                            <tr>
                                <td>xyz.txt</td>
                                <td>02-06-2020</td>
                                <td>MNO</td>
                                <td>Website</td>
                                <td>
                                    <Link><img src={download} height="20px" width="20px"/></Link>
                                </td>
                                <td>
                                    <Link><img src={delicon} height="20px" width="20px"/></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>jaiho.txt</td>
                                <td>03-06-2020</td>
                                <td>Khbr nai</td>
                                <td>java</td>
                                <td>
                                    <Link><img src={download} height="20px" width="20px"/></Link>
                                </td>
                                <td>
                                    <Link><img src={delicon} height="20px" width="20px"/></Link>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
        }else{
            return(
                <h1>You must SIGNIN first.. <Link to={'/signin'}>Signin</Link></h1>
            );
        }
    }
}

export default Shared;