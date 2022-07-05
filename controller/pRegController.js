const bcrypt                = require('bcrypt');
const { validationResult }  = require('express-validator');

const db = require('../models/db.js');
const Patient = require('../models/Patient.js');
const salt = 10;

const patientRegisterController = {
    getPatientRegister : (req, res) => {
        res.render('patient-register');
    },

    postPatientRegister: (req, res) => {
        var errors = validationResult(req);

        if(!errors.isEmpty()) {
            errors = errors.errors;
            var details = {};

            for(var i = 0; i < errors.length; i++)
                details[errors[i].param + '_error'] = errors[i].msg;
            
            res.render('patient-register', details);
        } else {
            
            var newRecord = {
                p_fname:    req.body.p_fname,
                p_mname:    req.body.p_mname,
                p_lname:    req.body.p_lname,
                p_bday:     req.body.p_bday,
                p_sex:      req.body.p_sex,
                p_address:  req.body.p_address,
                bloodtype:  req.body.blood,
                weight:     req.body.weight,
                height:     req.body.height,
                p_email:    req.body.p_email,
                p_password: req.body.p_password,
                f_name:     req.body.f_name,
                m_name:     req.body.m_name,
                f_telno:    req.body.f_telno,
                m_telno:    req.body.m_telno,
                f_address:  req.body.f_address,
                m_address:  req.body.m_address
            };
            
            var password = newRecord.p_password;
            
            bcrypt.hash(password, salt, (err, hash) => {
                newRecord.p_password = hash;
                
                db.create(Patient, newRecord, (flag) => {
                    if(flag)
                        res.redirect('/patient');
                    else
                        console.log(flag);
                });
            });
        }
    }
}

module.exports = patientRegisterController;