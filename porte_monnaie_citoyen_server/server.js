/**
 * API Rest de Porte Monnaie Citoyen
 */
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require("body-parser");
let db = require('./bd-info');
let email = require('emailjs/email');

let citizen = require('./routes/citizen');
let town = require('./routes/town');
let payment = require('./routes/payment');
let partner = require('./routes/partner');
let deal = require('./routes/deal');
let event = require('./routes/event');
let participation = require('./routes/participation');

let app = express();

//Pour utiliser les json dans les réponses
app.use(bodyParser.json());

// Connection BD
mongoose.connect(db.connection_string, { useNewUrlParser: true})
.then(() => console.log('Connected to mongodb'))
.catch(err => console.log(err));

//Connection SMTP
let server = email.server.connect({
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
    server.send({
        from: "Bastien PIERRE [PMC] <bastien.pierre@girafes.be>",
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text
    }, function(err, message) { console.log(err || message); });
})

//Server
app.listen(50001, () => console.log('Server started on port 50001'));