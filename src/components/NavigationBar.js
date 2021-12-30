import React, {Component} from "react";
import {Link} from 'react-router-dom';
import navicon from "../images/navicon.png";
import { AuthContext } from '../contexts/AuthContext';

class NavigationBar extends React.Component{
    static contextType = AuthContext;
    render() {

        let path;
        if(this.context.currentRole === "admin"){
            path = <Link to = "/myadmin">Manage Profile</Link>
        }else if(this.context.currentRole === "researcher"){
            path = <Link to = "/myresearcher">Manage Profile</Link>
        }else if(this.context.currentRole === "technician") {
            path = <Link to = "/mytechnician">Manage Profile</Link>
        }else if(this.context.currentRole === "student") {
            path = <Link to = "/mystudent">Manage Profile</Link>
        }

        let loginCheck;
        if(this.context.isAuthenticated){
            loginCheck = <div className={"dropdown"}>
                <button className="dropbtn">Hello,{this.context.currentUser}</button>
                <div className="dropdown-content">
                    {path}
                    <Link to = "/toshare">My Files</Link>
                    <Link onClick={() => this.context.logout() }>Logout</Link>
                </div>
            </div>
        }
        else{
            loginCheck = <Link to = "/signin">Sign In</Link>
        }

        return(
            <div>
                <a href="#" className="navicon"><img src={navicon} /></a>
                <div className="navbar">
                    <Link to = "/about">About</Link>
                    <Link to = "/people">People</Link>
                    <Link to = "/services">Services</Link>
                    <Link to = "/sampleprojects">Sample Projects</Link>
                    <Link to = "/contact">Contact</Link>
                    {loginCheck}
                </div>
            </div>
        );
    }
}

export default NavigationBar;