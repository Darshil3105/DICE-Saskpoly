const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    password: { type: String},
    about_me: { type: String},
    hobbies: { type: String},
    contact_details: { type: Number},
    projects: { type: Array },
    researcher: { type: String},
    technician: { type: String },
    permissiontotech: { type: String },
    student: { type: String },
    permissiontostd: { type: String },
    full_name: { type: String, required: false, unique: true},
    role: { type: String, required: true },
    username: { type: String, required: true, unique: true, trim: true, minlength: 3},
    team_members: {type: Array},

}, {
    timestamps: true,
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;