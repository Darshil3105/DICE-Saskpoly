const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const servicesSchema = new Schema({
    service_name: { type: String, required: true},

}, {
    timestamps: true,
});

const Services = mongoose.model('Services', servicesSchema);

module.exports = Services;