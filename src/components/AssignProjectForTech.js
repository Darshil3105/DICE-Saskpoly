import React,{Component} from "react";
import "../Profile.css";
import logo from "../images/logo.jpg";
import NavigationBar from "./NavigationBar";
import axios from "axios";
import {Link} from "react-router-dom";

class AssignProjectForTech extends Component {

    constructor(props){
        super(props);

        this.onChangeProject = this.onChangeProject.bind(this);
        this.onChangeStudent = this.onChangeStudent.bind(this);
        this.onChangePermToStd = this.onChangePermToStd.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            project_name: '',
            projects: [],
            student:'',
            students:[],
        }
    }

    componentDidMount() {

        axios.get('http://localhost:5005/projects/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        projects: response.data.map(projects => projects.project_name + ","+projects._id),
                        project_name: response.data[0].project_name + ","+response.data[0]._id,

                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
        axios.get('http://localhost:5005/profilemanagement/'+"student")
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        students: response.data.map(students => students.full_name + ","+students._id),
                        student: response.data[0].full_name + ","+response.data[0]._id,
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })


    }

    onChangeProject(e) {
        this.setState({
            project_name: e.target.value
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
        this.state.project_name = this.state.project_name.split(',');
        this.state.student = this.state.student.split(',');

        const updateprojectassignment = {

            team_members: [this.state.student[1]]
        }
        console.log(updateprojectassignment);
        axios.post('http://localhost:5005/projects/update/'+ this.state.project_name[1], updateprojectassignment)
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
                        <form>
                            <h2 className="about-head">Administrate Project:</h2>
                            <div className="form-edit">
                                <div className="form-edit-fields">
                                    <label>Choose Project:</label>
                                    <select required value={this.state.project} onChange={this.onChangeProject}>
                                        {
                                            this.state.projects.map(function (project) {
                                                return <option
                                                    key={project}
                                                    value={project}>{project}
                                                </option>;
                                            })
                                        }

                                    </select>
                                </div>
                                <div className="form-edit-fields">
                                    <label>Choose Student:</label>
                                    <select multiple required value={this.state.student}
                                            onChange={this.onChangeStudent}>
                                        {
                                            this.state.students.map(function (student) {
                                                return <option
                                                    key={student}
                                                    value={student}>{student}
                                                </option>;
                                            })
                                        }

                                    </select>
                                </div>
                                <div className="form-edit-fields">
                                    <label>Student Permissions:</label>
                                    <input type="checkbox" name="permissiontostd" value="Upload"/> Upload
                                </div>
                                <div className="form-edit-fields">
                                    <input type="checkbox" name="permissiontostd" value="Download"/> Download
                                </div>
                                <div className="form-edit-fields">
                                    <input type="checkbox" name="permissiontostd" value="View"/> View
                                </div>
                                <div className="form-edit-fields">
                                    <input type="checkbox" name="permissiontostd" value="Delete"/> Delete
                                </div>
                                <div className="form-edit-fields">
                                    <button>Submit</button>
                                    <button>Cancel</button>
                                </div>
                                <p className="msg">Project Administrate Successful..!!</p>
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

export default AssignProjectForTech;