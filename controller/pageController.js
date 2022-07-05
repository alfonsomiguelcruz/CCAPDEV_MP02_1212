const controller = {
    getIndex: (req, res) => {
        if(req.session.email)
            res.redirect('/doctor/home');
        else if (req.session.pemail)
            res.redirect('/patient/home');
        else {
            res.status(200);
            res.render('index');
        }
    },

    getForgotPass: (req, res) => {
        if(req.session.email)
            res.redirect('/doctor/home');
        else if (req.session.pemail)
            res.redirect('/patient/home');
        else
            res.render('forgot-password');
    }
};


module.exports = controller;

