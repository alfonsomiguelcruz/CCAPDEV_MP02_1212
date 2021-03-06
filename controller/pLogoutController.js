const patientLogoutController = {
    getPatientLogout: (req, res) => {
        req.session.destroy((err) => {
            if (err) throw err;

            res.redirect('/');
        });
    }
};

module.exports = patientLogoutController;