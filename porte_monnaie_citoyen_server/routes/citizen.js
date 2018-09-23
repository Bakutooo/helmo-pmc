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
 * @route   /citizen/connexion
 */
router.post('/connexion', (req, res) => {
    Citizen.findOne({mail: req.body.mail}).select('sold name firstname mail tel password')
    .then(citizen => {
        if(hash.verify(req.body.password, citizen.password)){
            console.log(citizen.mail + " vient de se connecter");
            res.json(citizen);
        } else {
            res.json({erreur: "Identifiant incorrect"});
        }
    });
});

/**
 * Creation d'un Citizen
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

    newCitizen.save()
        .then(res.json(newCitizen));
});

router.post('/change',(req, res) => {
    Citizen.findOne({_id: req.body._id}, (err, doc) => {
        doc.name = req.body.name;
        doc.firstname = req.body.firstname;
        doc.mail = req.body.mail;
        doc.tel = req.body.tel;
        doc.password = req.body.password;
        doc.save();
        res.json(doc);
    });
});

router.get('/getMissions',(req, res)=> {
    Citizen.findOne({_id: req.body._id}).select("mission");
})

router.post('/postMissions',(req, res) => {
    Citizen.findOne({_id: req.body._id}, (err, doc) => {
        doc.missions = req.body.missions;
        doc.save();
        res.json(doc);
    });
});

module.exports = router;

