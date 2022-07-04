const express = require('express');
const router  = express.Router();

const pageController   = require('../controller/pageController.js');

const pLoginController = require('../controller/pLoginController.js');

const dLoginController = require('../controller/dLoginController.js');

const pRegController   = require('../controller/pRegController.js');

const dRegController   = require('../controller/dRegController.js');

const dValidation      = require('../helpers/doctor-validation.js');

const pValidation       = require('../helpers/patient-validation.js');

const dHomeController  = require('../controller/dHomeController.js');

const dConsultController = require('../controller/dConsultController.js');

const dInviteController = require('../controller/dInviteController.js');

const dLogoutController = require('../controller/dLogoutController.js');

const pLogoutController = require('../controller/pLogoutController.js');

const dPatientController = require('../controller/dPatientController.js');

const pDoctorController = require('../controller/pDoctorController.js');

const pHomeController  = require('../controller/pHomeController.js');


router.get('/', pageController.getIndex);

router.get("/patient", pLoginController.getPatientLogin);

router.get('/doctor', dLoginController.getDoctorLogin);

router.get('/forgotpass', pageController.getForgotPass);

router.post('/patient/check', pLoginController.postPatientLogin);

router.post('/doctor/check', dLoginController.postDoctorLogin);

router.get('/doctor/home', dHomeController.getHome);

router.get('/patient/register', pRegController.getPatientRegister);

router.post('/patient/register', pValidation.signupValidation() ,pRegController.postPatientRegister);

router.get('/doctor/register', dRegController.getDoctorRegister);

router.post('/doctor/register', dValidation.signupValidation() ,dRegController.postDoctorRecord);

router.get('/doctor/add-consult', dConsultController.getAddConsult);

router.post('/doctor/add-consult', dConsultController.postConsult);

router.get('/doctor/posts', dHomeController.getPosts);

router.get('/doctor/invite', dInviteController.getInvite);

router.post('/doctor/invite', dInviteController.postInvite);

router.get('/doctor/logout', dLogoutController.getDoctorLogout);

router.get('/patient/home', pHomeController.getHome);

router.get('/patient/logout', pLogoutController.getPatientLogout);



router.get('/doctor/:link', dHomeController.getProfile);

router.get('/patient/:link', pHomeController.getProfile);

// TODO: doctor/patient-name
// router.get('/doctor/:pname', dPatientController);

// TODO: patient/doctor-name
// router.get('/doctor/:dname', pDoctorController);


module.exports = router;