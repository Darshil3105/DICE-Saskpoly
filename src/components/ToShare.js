import React,{Component} from "react";
import logo from "../images/logo.jpg";
import NavigationBar from "./NavigationBar";
import shared from "../images/shared.jpg";
import download from "../images/download-icon.png";
import delicon from "../images/delete-icon.png";
import '../FileShare.css';
import '../Profile.css';
import {Link} from 'react-router-dom';
import {AuthContext} from "../contexts/AuthContext";

class ToShare extends Component{
    static contextType = AuthContext;
    constructor(){
        super();
        this.showPopup = this.showPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    componentDidMount() {
        window.dispatchEvent(new CustomEvent("navigationhandler"));
    }

    showPopup(){
        const popup = document.querySelector('.popup');
        popup.style.display = "block";
    };

    closePopup(){
        const popup = document.querySelector('.popup');
        popup.style.display = "none";
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
                    <div className="file-upload">
                        <button onClick={this.showPopup}>Upload</button>
                    </div>
                    <div className="file-container">
                        <table>
                            <tr>
                                <th>Documents</th>
                                <th>Date</th>
                                <th>Shared To</th>
                                <th>Project Associated</th>
                            </tr>
                            <tr>
                                <td>xyz.txt</td>
                                <td>02-06-2020</td>
                                <td>MNO</td>
                                <td>Website</td>
                                <td>
                                    <Link><img src={download} className="downdel"/></Link>
                                </td>
                                <td>
                                    <Link><img src={delicon} className="downdel"/></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>jaiho.txt</td>
                                <td>03-06-2020</td>
                                <td>Khbr nai</td>
                                <td>java</td>
                                <td>
                                    <Link><img src={download} className="downdel"/></Link>
                                </td>
                                <td>
                                    <Link><img src={delicon} className="downdel"/></Link>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className="popup">
                    <div className="popup-content">
                        <span onClick={this.closePopup} className="popup-close">&times;</span>
                        <div className="file-upload-popup">
                            <div className="form-edit-fields">
                                <label>File/Folder:</label>
                                <input type="file"/>
                            </div>
                            <div className="form-edit-fields">
                                <label>Date:</label>
                                <input type="date"/>
                            </div>
                            <div className="form-edit-fields">
                                <label>Choose Project:</label>
                                <select>
                                    <option>Select a project</option>
                                    <option>Website</option>
                                    <option>Java</option>
                                    <option>Mongo</option>
                                    <option>SQL</option>
                                </select>
                            </div>
                            <div className="form-edit-fields">
                                <label>Assign Project:</label>
                                <input type="checkbox"/> Shweta
                            </div>
                            <div className="form-edit-fields">
                                <input type="checkbox"/> Swapnil
                            </div>
                            <div className="form-edit-fields">
                                <input type="checkbox"/> Karthik
                            </div>
                            <div className="form-edit-fields">
                                <input type="checkbox"/> Dhruv
                            </div>
                            <div className="form-edit-fields">
                                <input type="checkbox"/> Darshil
                            </div>
                            <div className="upload">
                                <button>Upload</button>
                            </div>
                        </div>
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

export default ToShare;