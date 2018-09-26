const express = require('express');
const router = express.Router();
const Citizen = require('./../models/Citizen');
const hash = require('password-hash');

/**
 * Recupère tous les utilisateurs
 * @route   /citizen/
 */
router.get('/', (req, res) => {
    Citizen.find()
        .then(citizen => res.json(citizen));
});

/**
 * @route   /citizetn/connection
 */
router.post('/connection', (req, res) => {
    Citizen.findOne({mail: req.body.mail}).select('sold name firstname mail tel password')
    .then(citizen => {
        if(hash.verify(req.body.password, citizen.password)){
            console.log(citizen.mail + " vient de se connecter");
            res.json(citizen);
        } else {
            res.json({error: "Identifiant incorrect"});
        }
    });
});

/**
 * post a new citizen
 * @route   /citizen/
 */
router.post('/', (req, res) => {
    let newCitizen = new Citizen({
        name: req.body.name,
        firstname: req.body.firstname,
        numNat: req.body.numNat,
        mail: req.body.mail,
        tel: req.body.tel,
        password: hash.generate(req.body.password)
        });
    
    console.log(newCitizen);
    newCitizen.save()
    .then(newCitizen =>{
        if(newCitizen == null){
        res.json({error : "La demande n'a pas été créé (1)"});
        }else{
            res.json(newCitizen._id);
        }
    });
});
/**
 * Get user by id
 * @route   /citizen//getById/:id
 */
router.get('/getById/:id', (req, res) => {
    Citizen.findOne({_id: req.params.id})
    .populate('events_inprogress')
    .then(citizen => {
        if(citizen == null){
            res.json({error : "Id incorrect"});
        }else{
            res.json(citizen);
        }
    }).catch(error => { res.json({error : "Id incorrect"})});
});

router.post('/change',(req, res) => {
    Citizen.findOne({_id: req.body._id}, (err, doc) => {
        doc.name = req.body.name;
        doc.firstname = req.body.firstname;
        doc.mail = req.body.mail;
        doc.tel = req.body.tel;
        doc.password = hash.generate(req.body.password);
        doc.save();
        res.json(doc);
    });
});

router.post('/participate',(req, res) => {
    Citizen.findById(req.body.id, (err, doc) => {
        doc.events_inprogress.push(req.body.event);
        doc.save();
        res.json(doc);
    });
});

router.post('/complete', (req, res) => {
    Citizen.findById(req.body.id, (err, doc) => {
        let index = doc.events_inprogress.indexOf({_id: req.body.event_id});
        doc.events.push(req.body.event_id);
        doc.events_inprogress.splice(index, 1);
        doc.save()
        res.json(doc);
    });
});

module.exports = router;