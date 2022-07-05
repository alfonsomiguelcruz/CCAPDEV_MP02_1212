const db        = require('../models/db.js');
const Patient    = require('../models/Patient.js');
const Record    = require('../models/Record.js');

const patientHomeController = {
    getHome: (req, res) => {
        console.log(req.session);
        db.findOne(Patient, {p_email: req.session.pemail}, '', (result) => {
            if(result) {
                db.find(Record, {patient: result._id}, 'doctors', (list) => {
                    var patname = result.p_fname + ' ' + result.p_lname;
                    var patlink = patname.split(' ').join('-');
                    var doctors = {list};
    
                    var patient = {
                        name: patname,
                        link: patlink,
                        doctors: doctors
                    }
                    res.render('patient-home', patient);
                });
            }
        });
    },

    getProfile: (req, res) => {
        if(req.session.pemail) {
            db.findOne(Patient, {p_email: req.session.pemail}, '', (result) => {
                var patname = result.p_fname + ' ' + result.p_lname;
                var patlink = patname.split(' ').join('-');
                var patient = result;
                patient.name = patname;
                patient.link = patlink;
            
                if(result)
                    res.render('patient-profile', patient);
            });
        } else {
            res.render('error');
        }
    },

    initPosts: (req, res) => {
        if(req.session.pemail)
            db.findOne(Patient, {p_email: req.session.pemail}, '', (patient) => {
                if(patient) {
                    db.find(Record, {patient: patient._id}, '',(records) => {
                        if(records)
                            res.status(200).send(records);
                    });
                }
            });
    },

    getPosts: (req, res) => {
        db.find(Doctor, {_id: req.body.query}, '', (doctor) => {
            if(doctor) {
                db.findOne(Patient, {p_email: req.session.pemail}, '', (patient) => {
                    if(patient) {
                        db.find(Record, {patient: patient._id, doctor: doctor._id}, (records) => {
                            if(records)
                                res.status(200).send(records);
                        });
                    }
                });
            }               
        });
    }
};

module.exports = patientHomeController;