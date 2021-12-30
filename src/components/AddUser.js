import React,{Component} from "react";
import "../Profile.css";
import logo from "../images/logo.jpg";
import NavigationBar from "./NavigationBar";
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import {Link} from "react-router-dom";

class AddUser extends Component{
    static contextType = AuthContext;

    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            full_name: '',
            role:'',
            roles:[],
            contact_details: '',
            username: '',
            password: '',
        }
    }

    componentDidMount() {
        this.setState({
            roles: ['researcher','technician','student','Client'],
            role: 'researcher'
        })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onChangeName(e) {
        this.setState({
            full_name: e.target.value
        })
    }

    onChangeRole(e) {
        this.setState({
            role: e.target.value
        })
    }

    onChangeContact(e) {
        this.setState({
            contact_details: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const newuser = {
            full_name: this.state.full_name,
            role: this.state.role,
            contact_details: this.state.contact_details,
            username: this.state.username,

            password: this.state.password

        }

        console.log(newuser);

        axios.post('http://localhost:5005/newusers/add', newuser)
            .then(res => console.log(res.data));

        const msg = document.querySelector('.msg');
        msg.style.display = "block";
}

    render() {
        if(this.context.isAuthenticated) {
        return(
            <div>
                <img src={logo} alt="DICE" className="rest-logo"/>
                <NavigationBar/>
                <div className="form-container">
                    <form onSubmit={this.onSubmit}>
                        <h2 className="about-head">Add User:</h2>
                        <div className="form-edit">
                            <div className="form-edit-fields">
                                <label>Full Name:</label>
                                <input type="text" required value={this.state.name} onChange={this.onChangeName} placeholder="Enter full name of user"/>
                            </div>
                            <div className="form-edit-fields">
                                <label>Role:</label>
                                <select required value={this.state.role} onChange={this.onChangeRole}>
                                {
                                        this.state.roles.map(function(role){
                                            return<option
                                                key = {role}
                                                value = {role}>{role}
                                            </option>;
                                        })
                                }
                                      
                                </select>
                            </div>
                            <div className="form-edit-fields">
                                <label>Contact Info:</label>
                                <input type="text" required value={this.state.contact} onChange={this.onChangeContact} placeholder="306-234-XXXX" pattern="[0-9]{3}[0-9]{3}[0-9]{4}"/>
                            </div>
                            <div className="form-edit-fields">
                                <label>UserName:</label>
                                <input type="text" required value={this.state.username} onChange={this.onChangeUsername} placeholder="Enter Username"/>
                            </div>
                            <div className="form-edit-fields">
                                <label>Password:</label>
                                <input type="text" required value={this.state.password} onChange={this.onChangePassword} placeholder="Enter Password"/>
                            </div>
                            <div className="form-edit-fields">
                                <button type="submit" >Save</button>
                                <button>Cancel</button>
                            </div>
                            <p className="msg">User added..!!</p>
                        </div>
                    </form>
                </div>
            </div>
        );
        }
        else{
            return(
                <h1>You must SIGNIN first.. <Link to={'/signin'}>Signin</Link></h1>
            );
        }
    }
}

export default AddUser;