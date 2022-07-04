const { check } = require('express-validator');

const validation = {
    signupValidation: () => {
        var validation = [
            check('p_fname', 'Please input your First Name.').notEmpty(),

            check('p_mname', 'Please input your Middle Name.').notEmpty(),

            check('p_lname', 'Please input your Last Name.').notEmpty(),

            check('p_bday', 'Please input your Birthday').notEmpty(),

            check('p_address', 'Please input your Home Address.').notEmpty(),

            check('weight', 'Please input your Weight.').notEmpty(),

            check('height', 'Please input your Height.').notEmpty(),

            check('f_name', 'Please input your Mother\'s name.').notEmpty(),

            check('m_name', 'Please input your Father\'s name.').notEmpty(),
            
            check('f_telno', 'Missing: Father Telephone No.').notEmpty(),
            
            check('m_telno', 'Missing: Mother Telephone No.').notEmpty(),

            check('f_address', 'Missing: Father Address.').notEmpty(),
            
            check('m_address', 'Missing: Mother Address.').notEmpty(),

            check('p_email', 'Please input your Email.').notEmpty(),
            
            check('p_email', 'Input must be your valid Email.').isEmail(),
            
            check('p_password', 'Please input your Password.').notEmpty(),

            check('p_password', 'Password must be 8 characters minimum.').notEmpty().isLength({min: 8})
        ];

        return validation;
    }
};

module.exports = validation;