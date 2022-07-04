const mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema({
    p_fname: {
        type: String,
        required: true
    },
    p_mname: {
        type: String,
        required: true
    },
    p_lname: {
        type: String,
        required: true
    },
    p_bday: {
        type: Date,
        required: true
    },
    p_sex: {
        type: String,
        enum: ['M', 'F'],
        required: true
    },
    p_address: {
        type: String,
        required: true
    },
    bloodtype: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    p_email: {
        type: String,
        unique: true,
        required: true
    },
    p_password: {
        type: String,
        minLength: 8,
        required: true
    },
    f_name: {
        type: String,
        required: true
    },
    m_name: {
        type: String,
        required: true
    },
    f_telno: {
        type: String,
        required: true
    },
    m_telno: {
        type: String,
        required: true
    },
    f_address: {
        type: String,
        required: true
    },
    m_address: {
        type: String,
        required: true
    },
    doctors: [{type: mongoose.Types.ObjectId, ref:'Doctor'}]
});


module.exports = mongoose.model('Patient', PatientSchema);