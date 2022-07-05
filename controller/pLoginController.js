const bcrypt = require('bcrypt');
const db     = require('../models/db.js');
const Patient = require('../models/Patient.js');

const patientLoginController = {
    getPatientLogin : (req, res) => {
        if(req.session.pemail) {
            db.findOne(Patient, {p_email: req.session.pemail}, '', (result) => {
                if(result)
                    res.redirect(307, '/doctor/home');
            });
        } else
        res.render('patient-login');
    },

    postPatientLogin : (req, res) => {
        var login_email = req.body.p_email;
        var login_password = req.body.p_password;

        db.findOne(Patient, {p_email: login_email}, '', (result) => {
            if(result) {
                var patient = { email: result.p_email };

                bcrypt.compare(login_password, result.p_password, (err, equal) => {
                    if(equal) {
                        req.session.pemail = patient.email;
                        res.redirect('/patient/home');
                    } else {
                        var details = {
                            flag: false,
                            error: "Credentials does not match"
                        }
                        res.render('patient-login', details);
                    }
                });
            } else
                res.render('patient-login', {error: "Credentials does not match"});
        });
    },  
};

module.exports = patientLoginController;