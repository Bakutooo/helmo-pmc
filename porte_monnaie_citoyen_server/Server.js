let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require("body-parser");
let db = require('./bd-info');

let citizen = require('./routes/citizen');
let mission = require('./routes/mission'); //non utiliser
let town = require('./routes/town');
let transaction = require('./routes/transaction');
let partner = require('./routes/partner');
let deal = require('./routes/deal');
let event = require('./routes/event');
let request = require('./routes/request');

let app = express();

//Pour utiliser les json dans les réponses
app.use(bodyParser.json());

// Connection BD
mongoose.connect(db.connection_string)
.then(() => console.log('Connected to mongodb'))
.catch(err => console.log(err));

//Routes
app.use('/citizen', citizen);
app.use('/mission', mission);
app.use('/town', town);
app.use('/transaction', transaction);
app.use('/partner', partner);
app.use('/deal', deal);
app.use('/event', event);
app.use('/request', event);

//Server
app.listen(30000, () => console.log('Server started on port 30000'));