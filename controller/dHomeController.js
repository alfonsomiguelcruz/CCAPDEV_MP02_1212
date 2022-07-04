const db        = require('../models/db.js');
const Doctor    = require('../models/Doctor.js');
const Patient    = require('../models/Patient.js');
const Record    = require('../models/Record.js');

const doctorHomeController = {
    getHome: (req, res) => {
        console.log(req.session);
        db.findOne(Doctor, {d_email: req.session.email}, '', (result) => {
            console.log(result);

            db.find(Record, {doctor: result._id}, 'patients', (list) => {
                var docname = result.d_fname + ' ' + result.d_lname;
                var doclink = result.docid;
                var patients = {list};

                var doctor = {
                    name: docname,
                    link: doclink,
                    patients: patients
                }
                res.render('doctor-home', doctor);
            });
        });
    },

    getProfile: (req, res) => {
        if(req.session.email) {
            db.findOne(Doctor, {d_email: req.session.email}, '', (result) => {
                var docname = result.d_fname + ' ' + result.d_lname;
                var doclink = result.docid;
                var doctor = result;
                doctor.name = docname;
                doctor.link = doclink;
                console.log(doctor);
                if(result)
                    res.render('doctor-profile', doctor);
            });
        } else {
            res.render('error');
        }
    },

    getPosts: (req, res) => {
        db.find(Patient, {$or:[{p_fname: req.body.query},
            {p_mname: req.body.query},
            {p_lname: req.body.query}]}, '', (patient) => {
            if(patient) {
                db.findOne(Doctor, {d_email: req.session.email}, '', (doctor) => {
                    if(doctor) {
                        db.find(Record, {patient: patient._id, doctor: doctor._id}, (records) => {
                            var postRecords = records;
                            var finalRecords = [{
                                link: '/doctor/' + patient.p_fname + '-' + patient.p_lname,
                                name: patient.p_fname + ' ' + patient.p_lname,
                                date: postRecords.date
                            }];
                            res.send(200, postRecords);
                        });
                    }
                });
            } else
                res.send(200, patient);                
        });
    },
};

module.exports = doctorHomeController;