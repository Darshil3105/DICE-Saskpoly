import React, { Component, createContext } from 'react';

export const AuthContext = createContext()

class AuthContextProvider extends Component {

    state = {
        isAuthenticated : false,
        currentUser : null,
        currentEmail : null,
        currentRole : null,
        currentId : null,
    }
   
    login = res => {
        if(res.data.success){
            this.setState({
                isAuthenticated : true,
                currentUser : res.data.user.full_name,
                currentRole : res.data.user.role,
                currentId : res.data.user._id,
            })
        }
    }

    logout = () => {
        localStorage.removeItem('token')
        this.setState({
            isAuthenticated : false,
            currentUser : null
        })
        window.location = '/';
    }

    render(){
        return(
            <AuthContext.Provider value = {{
                ...this.state,
                logout : this.logout,
                login : this.login
            }}>
            {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider