const { check } = require('express-validator');

const validation = {
    signupValidation: () => {
        var validation = [
            check('d_fname', 'Please input your First Name.').notEmpty(),

            check('d_mname', 'Please input your Middle Name.').notEmpty(),

            check('d_lname', 'Please input your Last Name.').notEmpty(),

            check('d_bday', 'Please input your Birthday').notEmpty(),

            check('d_address', 'Please input your Home Address.').notEmpty(),

            check('titles', 'Please input your Medical Titles.').notEmpty(),

            check('specs', 'Please input your Specializations.').notEmpty(),
            
            check('docid', 'Please input your Doctor ID.').notEmpty(),
            
            check('docid', 'Doctor ID must be 8 characters long.').notEmpty().isLength({min: 8, max: 8}),
            
            check('off_address', 'Please input your Office Address.').notEmpty(),
            
            check('d_email', 'Please input your Email.').notEmpty(),
            
            check('d_email', 'Input must be your valid Email.').isEmail(),
            
            check('d_password', 'Please input your Password.').notEmpty(),

            check('d_password', 'Password must be 8 characters minimum.').notEmpty().isLength({min: 8})
        ];

        return validation;
    }
};

module.exports = validation;