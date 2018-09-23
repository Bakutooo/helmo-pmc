let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require("body-parser");
let db = require('./bd-info');

/* exemples
let users = require('./routes/users');
let messages = require('./routes/messages');
*/

let app = express();

//Pour utiliser les json dans les réponses
app.use(bodyParser.json());


// Connection BD
mongoose.connect(db.connection_string)
.then(() => console.log('Connected to mongodb'))
.catch(err => console.log(err));


//Routes
/* exemples
app.use('/messages', messages);
app.use('/users', users);
*/

//Server
app.listen(30000, () => console.log('Server started on port 30000'));