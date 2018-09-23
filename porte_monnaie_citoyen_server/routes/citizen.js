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
    Citizen.findOne({mail: req.body.mail})
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
 * Creation d'un user
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

    newUser.save()
        .then(res.json(newUser));
});

module.exports = router;

