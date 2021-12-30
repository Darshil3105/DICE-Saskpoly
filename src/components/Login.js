import React from "react";
import logo from "../images/logo.jpg";
import { Alert } from 'react-bootstrap'
import "../Login.css"
import { AuthContext } from '../contexts/AuthContext'
import NavigationBar from "./NavigationBar";
import { login } from '../actions/auth';


class Login extends React.Component{
    static contextType = AuthContext

    state = {
        msg : null,
        variant : "success",
        token : localStorage.getItem('token')
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    componentDidUpdate(){
        if(this.context.isAuthenticated){
            this.props.history.push('/about')
        }
    }

    componentDidMount() {
        window.dispatchEvent(new CustomEvent("navigationhandler"));
    }

    onSubmit = e => {
        e.preventDefault();

        const {password, username, token} = this.state;
        const data = {password, username, token};

        //Attempt to login
        login(data, res => {
            console.log(res)
            if(res.data.success){
                this.setState({
                    msg : res.data.msg,
                    variant : "success"
                })
                this.context.login(res)
            } else {
                this.setState({
                    msg : res.data.msg,
                    variant : "danger"
                })
            }
        })
    }

    render() {
        return(
            <div>
                <img src={logo} alt="DICE" className="rest-logo"/>
                <NavigationBar/>
                <div className="login-box">
                    <form onSubmit={this.onSubmit} id="login">
                        {this.state.msg ? (
                            <Alert variant={this.state.variant}>{this.state.msg}</Alert>
                        ) : null }
                        <div className="login-head">
                            <h3>Login</h3>
                        </div>
                        <div>
                            <input type="text" name="username" placeholder="Username" onChange={this.onChange} className="uid" />
                            <input type="password" name="password" placeholder="Password" onChange={this.onChange} className="uid" />
                        </div>
                        <div>
                            <input type="submit" value="Login" className="logbtn"  />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;