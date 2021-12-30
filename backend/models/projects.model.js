const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sampleprojectsSchema = new Schema({
    project_name: { type: String, required: false,unique: true},
    project_description: { type: String, required: false},
    team_members: {type: Array},
    clients: { type: String, required: false },
    researcher: { type: String, required: false },
    technician: { type: String, required: false },
    student: { type: String, required: false },

}, {
    timestamps: true,
});

const Projects = mongoose.model('Projects', sampleprojectsSchema);

module.exports = Projects;