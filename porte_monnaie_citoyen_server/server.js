/**
 * API Rest de Porte Monnaie Citoyen
 */
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require("body-parser");
let db = require('./bd-info');
let email = require('emailjs/email');
let uuid = require('uuid/v4');
let session = require('express-session');
let FileStore = require('session-file-store')(session);
let passport = require('passport');
let socketInfo = require('./socket-info');

let citizen = require('./routes/citizen');
let town = require('./routes/town');
let payment = require('./routes/payment');
let partner = require('./routes/partner');
let deal = require('./routes/deal');
let event = require('./routes/event');
let participation = require('./routes/participation');

let app = express();
let http = require('http').Server(app);

//Pour utiliser les json dans les réponses
app.use(bodyParser.json());

socketInfo.socket = require('socket.io')(http);
http.listen(50003, () => console.log("Socket server listen on 50003"));

//Configuration et initialisation de Passport
require('./passport')(passport);

//Session MiddleWare
app.use(session({
    genid : (req) => {
        console.log("Session middleware\nSessionId: ");
        console.log(req.sessionID);
        return uuid();
    },
    store : new FileStore(),
    secret : 'girafes',
    resave : false,
    saveUninitialized : false
}));

app.use(passport.initialize());
app.use(passport.session());

// Connection BD
mongoose.connect(db.connection_string, { useNewUrlParser: true})
.then(() => console.log('Connected to mongodb'))
.catch(err => console.log(err));

//Connection SMTP
let serverMail = email.server.connect({
    user: "bastien.pierre@girafes.be",
    password: "bK9-Vfj@4W",
    port: 465,
    host: "mail31.lwspanel.com",
    ssl: true
})

//Routes
app.use('/citizen', citizen);
app.use('/town', town);
app.use('/payment', payment);
app.use('/partner', partner);
app.use('/deal', deal);
app.use('/event', event);
app.use('/participation', participation);
app.post('/smtp', (req, res) => {
    serverMail.send({
        from: "Bastien PIERRE [PMC] <bastien.pierre@girafes.be>",
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text
    }, function(err, message) { console.log(err || message); });
});

//Server
app.listen(50001, () => console.log('Server started on port 50001'));