const mongoose = require('mongoose');

var RecordSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    doctor: {
        type: mongoose.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    patient: {
        type: mongoose.Types.ObjectId,
        ref: 'Patient',
        required: true
    }
});

module.exports = mongoose.model('Record', RecordSchema);