const bcrypt                = require('bcrypt');
const { validationResult }  = require('express-validator');

const db = require('../models/db.js');
const Doctor = require('../models/Doctor.js');
const salt = 10;

const doctorRegisterController = {
    getDoctorRegister : (req, res) => {
        res.render('doctor-register');
    },

   postDoctorRecord: (req, res) => {
        var errors = validationResult(req);
        
        if(!errors.isEmpty()) {
            errors = errors.errors;
            var details = {};

            for(var i = 0; i < errors.length; i++)
                details[errors[i].param + '_error'] = errors[i].msg;

            res.render('doctor-register', details);
        } else {
            var newRecord = {
                d_fname     : req.body.d_fname,
                d_mname     : req.body.d_mname,
                d_lname     : req.body.d_lname,
                d_bday      : req.body.d_bday,
                d_sex       : req.body.d_sex,
                d_address   : req.body.d_address,
                docid       : req.body.docid,
                titles      : req.body.titles,
                specs       : req.body.specs,
                off_address : req.body.off_address,
                d_email     : req.body.d_email,
                d_password  : req.body.d_password
            };
            var password = newRecord.d_password;

            bcrypt.hash(password, salt, (err, hash) => {
                newRecord.d_password = hash;

                db.create(Doctor, newRecord, (flag) => {
                    if(flag)
                        res.redirect('/doctor');
                });
            });
        }
   },
}

module.exports = doctorRegisterController;