const db = require('../models/db.js');
const Doctor = require('../models/Doctor.js');
const Patient = require('../models/Patient.js');

const doctorInviteController = {
    getInvite: (req, res) => {
        if(req.session.email) {
            db.findOne(Doctor, {d_email: req.session.email}, '', (result) => {
                var docname = result.d_fname + ' ' + result.d_lname;
                var doclink = result.docid;
                var doctor = result;
                doctor.name = docname;
                doctor.link = doclink;
                
                res.render('doctor-invite', doctor);
            });
        } else
            res.render('error');
    },

    postInvite: (req, res) => {
        if(req.session.email) {
            db.findOne(Patient, {p_email: req.body.p_email}, '', (result) => {
                if(result) {
                    db.findOne(Doctor, {patients: [result._id]}, '', (patient) => {
                        if(patient) {
                            res.render('doctor-invite', {error: 'This is already your patient.'});
                        } else {
                            db.findOne(Doctor, {d_email: req.session.email}, '', (doctor) => {
                                Doctor.updateOne({d_email: req.session.email}, { $push : {patients: result._id}}, (err, flag) => {});
                                Patient.updateOne({p_email: result.p_email}, {$push : {doctors: doctor._id}}, (err, flag) => {});
                                res.redirect('/doctor/invite');
                            });
                        }
                    });
                } else {
                    res.render('doctor-invite', {error: 'Patient e-mail does not exist'});
                }
            });
        } else
            res.render('error');
    }
}

module.exports = doctorInviteController;