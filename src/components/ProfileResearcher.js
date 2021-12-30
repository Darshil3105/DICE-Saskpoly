import React,{Component} from "react";
import "../Profile.css";
import logo from "../images/logo.jpg";
import profilephoto from "../images/profilephoto.png";
import NavigationBar from "./NavigationBar";
import history from "../history";
import axios from "axios";
import {Link} from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';

class ProfileAdmin extends Component{
    static contextType = AuthContext;

    constructor(props){
        super(props);

        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeAbout = this.onChangeAbout.bind(this);
        this.onChangeHobbies = this.onChangeHobbies.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeProject = this.onChangeProject.bind(this);
        this.onChangeTechnician = this.onChangeTechnician.bind(this);
        this.onChangePermToTech = this.onChangePermToTech.bind(this);
        this.onChangeStudent = this.onChangeStudent.bind(this);
        this.onChangePermToStd = this.onChangePermToStd.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            password: '',
            about:'',
            hobbies:'',
            contact: '',
            project: '',
            projects: [],
            technician:'',
            technicians:[],
            student:'',
            students:[],
        }
    }

    componentDidMount() {
        window.dispatchEvent(new CustomEvent("navigationhandler"));

        this.setState({
            projects: ['Select Project','Nutrien','LaPrepp Digital Marketing'],
            project: 'Select Project',
            technicians: ['Select Technician','Shweta','Swapnil','Dhruv','Karthik'],
            technician: 'Select Technician',
            students: ['Select Student','Shweta','Swapnil','Dhruv','Karthik'],
            student: 'Select Student'
        });

        axios.get('http://localhost:5005/newusers/'+this.context.currentId)
            .then(response => {
                console.log(response.data);
                this.setState({
                    password: response.data.password,
                    about_me: response.data.about_me,
                    hobbies: response.data.hobbies,
                    contact_details: response.data.contact_details,
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onChangeAbout(e) {
        this.setState({
            about_me: e.target.value
        })
    }

    onChangeHobbies(e) {
        this.setState({
            hobbies: e.target.value
        })
    }

    onChangeContact(e) {
        this.setState({
            contact_details: e.target.value
        })
    }

    onChangeProject(e) {
        this.setState({
            project: e.target.value
        })
    }


    onChangeTechnician(e) {
        this.setState({
            technician: e.target.value
        })
    }

    onChangePermToTech(e) {
        this.setState({
            technician: e.target.value
        })
    }


    onChangeStudent(e) {
        this.setState({
            student: e.target.value
        })
    }

    onChangePermToStd(e) {
        this.setState({
            permissiontostd: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const updateprofile = {
            password: this.state.password,
            contact_details: this.state.contact_details,
            about_me: this.state.about_me,
            hobbies: this.state.hobbies,
        }
        console.log(updateprofile);

        axios.post('http://localhost:5005/profilemanagement/update/'+ this.context.currentId, updateprofile)
            .then(res => console.log(res.data));

        const msg = document.querySelector('.msg');
        msg.style.display = "block";
    }

    render() {
        if(this.context.isAuthenticated) {
            return (
                <div>
                    <img src={logo} alt="DICE" className="rest-logo"/>
                    <NavigationBar/>
                    <div className="form-container">
                        <form onSubmit={this.onSubmit}>
                            <h2 className="about-head">My Profile:</h2>
                            <img src={profilephoto} alt="Profile Photo" className="profile-pic"/>
                            <div>
                                <h2 className="user-name">{this.context.currentUser}</h2>
                                <h2 className="user-role">{this.context.currentRole}</h2>
                            </div>
                            <div className="add-buttons">
                                <button onClick={() => history.push('/newuser')}>Add User</button>
                                <button onClick={() => history.push('/newproject')}>Add Project</button>
                            </div>
                            <div className="form-edit">
                                <div className="form-edit-fields">
                                    <label>Password:</label>
                                    <input type="text" value={this.state.password} onChange={this.onChangePassword}
                                           placeholder="New Password"/>
                                </div>
                                <div className="form-edit-fields">
                                    <label>About Me:</label>
                                    <textarea value={this.state.about_me} onChange={this.onChangeAbout}
                                              placeholder="Background History...!!"/>
                                </div>
                                <div className="form-edit-fields">
                                    <label>Hobbies:</label>
                                    <input type="text" value={this.state.hobbies} onChange={this.onChangeHobbies}
                                           placeholder="Tell me your hobbies..."/>
                                </div>
                                <div className="form-edit-fields">
                                    <label>Contact Info:</label>
                                    <input type="text" value={this.state.contact_details}
                                           onChange={this.onChangeContact} placeholder="306-234-XXXX"
                                           pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                                </div>

                                <div className="form-edit-fields">
                                    <button type="submit">Update</button>
                                    <button>Cancel</button>
                                </div>
                                <div className="form-edit-fields">
                                    <p><Link to="/assignprojectforres">Administrate Project Here!</Link></p>
                                </div>
                                <p className="msg">Profile Updated..!!</p>
                            </div>
                        </form>
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

export default ProfileAdmin;