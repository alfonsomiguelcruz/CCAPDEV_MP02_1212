const mongoose = require('mongoose');
const Patient = require('./Patient');

var DoctorSchema = new mongoose.Schema({
    d_fname: {
        type: String,
        required: true
    },
    d_mname: {
        type: String,
        required: true
    },
    d_lname: {
        type: String,
        required: true
    },
    d_bday: {
        type: Date,
        required: true
    },
    d_sex: {
        type: String,
        enum: ['M', 'F'],
        required: true
    },
    d_address: {
        type: String,
        required: true
    },
    docid: {
        type: String,
        minLength: 8,
        maxLength: 8,
        required: true
    },
    titles: {
        type: String,
        required: true
    },
    specs: {
        type: String,
        required: true
    },
    off_address: {
        type: String,
        required: true
    },
    d_email: {
        type: String,
        required: true
    },
    d_password: {
        type: String,
        minLength: 8,
        required: true
    },
    patients: [{type: mongoose.Types.ObjectId, ref:'Patient'}]
});

module.exports = mongoose.model('Doctor', DoctorSchema);