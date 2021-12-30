import React,{Component} from "react";
import "../Profile.css";
import logo from "../images/logo.jpg";
import NavigationBar from "./NavigationBar";
import axios from "axios";
import {Link} from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";

class AddProject extends Component{
    static contextType = AuthContext;

    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeClient = this.onChangeClient.bind(this);
        this.onChangeResearcher = this.onChangeResearcher.bind(this);
        this.onChangeTechnician = this.onChangeTechnician.bind(this);
        this.onChangeStudent = this.onChangeStudent.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            project_name: '',
            project_description:'',
            clients:'',
            team_members:[],
            team_member:[],
            researchers: [],
            researcher: '',
            technicians: [],
            technician: '',
            students: [],
            student: '',


        }
    }

    componentDidMount() {

        axios.get('http://localhost:5005/profilemanagement/'+"researcher")
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        researchers: response.data.map(researchers => researchers.full_name + ","+researchers._id),
                        researcher: response.data[0].full_name + ","+response.data[0]._id,

                    })
               }
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get('http://localhost:5005/profilemanagement/'+"technician")
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        technicians: response.data.map(technicians => technicians.full_name + ","+technicians._id),
                        technician: response.data[0].full_name + ","+response.data[0]._id,

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

    onChangeName(e) {
        this.setState({
            project_name: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            project_description: e.target.value
        })
    }

    onChangeClient(e) {
        this.setState({
            clients: e.target.value
        })
    }

    onChangeResearcher(e) {
        this.setState({
            researcher: e.target.value
        })
    }

    onChangeTechnician(e) {
        this.setState({
            technician: e.target.value
        })
    }

    onChangeStudent(e) {
        this.setState({
            student: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.state.researcher = this.state.researcher.split(',');
        this.state.technician = this.state.technician.split(',');
        this.state.student = this.state.student.split(',');
        const newproject = {
            project_name: this.state.project_name,
            project_description: this.state.project_description,
            clients: this.state.clients,

            team_members: [this.state.researcher[1],this.state.technician[1],this.state.student[1]]
}

        console.log(newproject);

        axios.post('http://localhost:5005/projects/add', newproject)
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
                        <h2 className="about-head">Add Project:</h2>
                        <div className="form-edit">
                            <div className="form-edit-fields">
                                <label>Name:</label>
                                <input type="text" required value={this.state.name} onChange={this.onChangeName} placeholder="Enter name of project..."/>
                            </div>
                            <div className="form-edit-fields">
                                <label>Description:</label>
                                <textarea required value={this.state.description} onChange={this.onChangeDescription} placeholder="Project description..!!" />
                            </div>
                            <div className="form-edit-fields">
                                <label>Industry Partner:</label>
                                <input type="text" required value={this.state.client} onChange={this.onChangeClient} placeholder="Enter name of partner..."/>
                            </div>
                            <div className="form-edit-fields">
                                <label>Researcher:</label>
                                <select  value={this.state.researcher} onChange={this.onChangeResearcher}>
                                    {
                                        this.state.researchers.map(function(researcher){
                                            return<option
                                                key = {researcher}
                                                value = {researcher}>{researcher}
                                            </option>;
                                        })
                                    }

                                </select>
                            </div>
                            <div className="form-edit-fields">
                                <label>Technician:</label>
                                <select  value={this.state.technician} onChange={this.onChangeTechnician}>
                                    {
                                        this.state.technicians.map(function(technician){
                                            return<option
                                                key = {technician}
                                                value = {technician}>{technician}
                                            </option>;
                                        })
                                    }

                                </select>
                            </div>
                            <div className="form-edit-fields">
                                <label>Student:</label>
                                <select  value={this.state.student} onChange={this.onChangeStudent}>
                                    {
                                        this.state.students.map(function(student){
                                            return<option
                                                key = {student}
                                                value = {student}>{student}
                                            </option>;
                                        })
                                    }

                                </select>
                            </div>
                            <div className="form-edit-fields">
                                <button type="submit">Save</button>
                                <button>Cancel</button>
                            </div>
                            <p className="msg">Project added..!!</p>
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

export default AddProject;