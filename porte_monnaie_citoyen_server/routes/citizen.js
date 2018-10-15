const express = require('express');
const router = express.Router();
const Citizen = require('./../models/Citizen');
const hash = require('password-hash');

/**
 * Route    GET /citizen/
 * Récupère tous les citoyens
 */
router.get("/", (req, res) => {
    Citizen.find()
    .then(citizens => res.json(citizens))
    .catch(error => res.json({error : "Impossible de récupérer les citoyens"}))
});

/**
 * Route    GET /citizen/:id
 * Récupère un citoyen
 */
router.get("/:id", (req, res) => {
    Citizen.findOne({_id : req.params.id})
    .then(citizen => res.json(citizen))
    .catch(error => res.json({error : "Impossible de récupérer le citoyen"}))
});

/**
 * Route    POST /citizen/connection
 * Permet la connexion du citoyen
 */
router.post("/connection", (req, res) => {
    Citizen.findOne({mail : req.body.mail})
    .select("sold name firstname mail tel password")
    .then(citizen => {
        if(hash.verify(req.body.password, citizen.password)){
            res.json(citizen);
        }
        else{
            res.json({error : "Identifiants incorrectes"})
        }
    })
    .catch(error => res.json({error : "Impossible de se connecter"}))
});

/**
 * Route    POST /citizen/
 * Permet la création d'un citoyen
 */
router.post("/", (req, res) => {
    let newUser = new newUser({
        
    })
})
module.exports = router;