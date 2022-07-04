const bcrypt = require('bcrypt');
const db     = require('../models/db.js');
const Doctor = require('../models/Doctor.js');

const doctorLoginController = {
    getDoctorLogin: (req, res) => {
        // console.log(req.session);
        // if(req.session.email) {
        //     db.findOne(Doctor, {d_email: req.session.email}, '', (result) => {
        //         if(result) {

        //             res.redirect(307, '/doctor/home');
        //         }
        //     });
        // } else
            res.render('doctor-login');        
    },

    postDoctorLogin: (req, res) => {
        var login_email = req.body.d_email;
        var login_password = req.body.d_password;

        db.findOne(Doctor, {d_email: login_email}, '', (result) => {
            if(result) {
                var doctor = { email: result.d_email };
                
                // benilde@email.com, salvador
                bcrypt.compare(login_password, result.d_password, (err, equal) => {
                    if(equal) {
                        req.session.email = doctor.email;
                        res.redirect('/doctor/home');
                    } else {
                        var details = {
                            flag: false,
                            error: "Credentials does not match"
                        }
                        res.render('doctor-login', details);
                    }
                        
                });
            } else
                res.render('doctor-login', {error: "Credentials does not match"});
        });
    },
};

module.exports = doctorLoginController;