const db = require('../models/db.js');
const Doctor = require('../models/Doctor.js');
const Patient = require('../models/Patient.js');
const Record = require('../models/Record.js');

const doctorConsultController = {
    getAddConsult: (req, res) => {
        if(req.session.email) {
            db.findOne(Doctor, {d_email: req.session.email}, '', (result) => {
                var docname = result.d_fname + ' ' + result.d_lname;
                var doclink = result.docid;
                var doctor =  {
                    name: docname,
                    link: doclink
                };

                if(result)
                    res.render('doctor-addcon', doctor);
            });
        }
        else
            res.render('error');
    },

    postConsult: (req, res) => {
        if(req.session.email) {
            db.findOne(Doctor, {d_email: req.session.email}, '', (dRes) => {
                if(dRes) {
                    var patientRecord = {
                        fname: req.body.fname,
                        mname: req.body.mname,
                        lname: req.body.lname,
                        doctors: [dRes._id]
                    };
    
                    db.findOne(Patient, patientRecord, '', (pRes) => {
                        if(pRes) {
                            var finalRecord = {
                                subject: req.body.subject,
                                date: req.body.date,
                                info: req.body.con,
                                doctor: dRes._id,
                                patient: pRes._id
                            };
                            console.log(finalRecord);
                            db.create(Record, finalRecord, (result) => {
                                if(result) {
                                    res.redirect('/doctor/home');
                                } else
                                    console.log("Error: Record not Inserted");
                            });
                        } else
                            console.log("Error: Patient Missing");
                    });
                } else
                    console.log("Error: Doctor Missing");
            });
        }    
    }
};

module.exports = doctorConsultController;