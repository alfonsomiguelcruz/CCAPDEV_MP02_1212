const controller = {
    getFavicon: (req, res) => {
        res.status(204);
    },

    getIndex: (req, res) => {
        console.log("PAGE-CONTROLLER: " + req.session.d_email);

        if(req.session.d_email)
            res.redirect('/doctor/home');
        else {
            res.status(200);
            res.render('index');
        }
    },

    getForgotPass: (req, res) => {
        if(req.session.d_email)
            res.redirect('/doctor/home');
        else
            res.render('forgot-password');
    }
};


module.exports = controller;

