const express       = require('express');
const session       = require('express-session');
const hbs           = require('hbs');
const MongoStore    = require('connect-mongo');
const dotenv        = require('dotenv').config();

const path          = require('path');
const routes        = require('./routes/routes.js');
const db            = require('./models/db.js');

const PORT = process.env.PORT || 3000;
const app  = express();

app.use(express.json());
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + `/views/partials`);

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

db.connect();

app.use(session({
    'secret': 'mp02',
    'resave': false,
    'saveUninitialized': false,
    store: MongoStore.create({
        mongoUrl: db.connection
    })
}));

app.use('/', routes);

app.use((req, res) => {
    var details = {};

    if(req.session.email) {
        details.flag = true;
        details.email = req.session.email;
    } else
        details.flag = false;

    res.render('error', details);
});

app.listen(PORT, ()=>{
    console.log(`Listening to PORT: ${PORT}`);
});