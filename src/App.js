import React, {Component} from 'react';
import './App.css';
import AboutUs from "./components/AboutUs";
import Welcome from "./components/Welcome";
import People from "./components/People";
import Services from "./components/Services";
import SampleProjects from "./components/SampleProjects";
import Contact from "./components/ContactUs";
import Login from "./components/Login";
import ProfileAdmin from "./components/ProfileAdmin";
import ProfileResearcher from "./components/ProfileResearcher";
import ProfileTechnician from "./components/ProfileTechnician";
import ProfileStudent from "./components/ProfileStudent";
import AddUser from "./components/AddUser";
import AddProject from "./components/AddProject";
import ToShare from "./components/ToShare";
import Shared from "./components/Shared";
import AssignProject from "./components/AssignProject";
import AssignProjectForReschr from "./components/AssignProjectForReschr";
import AssignProjectForTech from "./components/AssignProjectForTech";
import {Router, Route} from 'react-router-dom';
import history from "./history";
import AuthContextProvider from './contexts/AuthContext'

class App extends React.Component{
    render(){
        return (
            <AuthContextProvider>
            <Router history={history}>
                <div>
                    <Route exact path = "/" component = {Welcome}/>
                    <Route exact path = "/about" component = {AboutUs}/>
                    <Route exact path = "/people" component = {People}/>
                    <Route exact path = "/services" component = {Services}/>
                    <Route exact path = "/sampleprojects" component = {SampleProjects}/>
                    <Route exact path = "/contact" component = {Contact}/>
                    <Route exact path = "/signin" component = {Login}/>
                    <Route exact path = "/myadmin" component = {ProfileAdmin}/>
                    <Route exact path = "/myresearcher" component = {ProfileResearcher}/>
                    <Route exact path = "/mytechnician" component = {ProfileTechnician}/>
                    <Route exact path = "/mystudent" component = {ProfileStudent}/>
                    <Route exact path = "/newuser" component = {AddUser}/>
                    <Route exact path = "/newproject" component = {AddProject}/>
                    <Route exact path = "/toshare" component = {ToShare}/>
                    <Route exact path = "/shared" component = {Shared}/>
                    <Route exact path = "/assignproject" component = {AssignProject}/>
                    <Route exact path = "/assignprojectforres" component = {AssignProjectForReschr}/>
                    <Route exact path = "/assignprojectfortech" component = {AssignProjectForTech}/>
                </div>
            </Router>
            </AuthContextProvider>
        );
    }
}

export default App;