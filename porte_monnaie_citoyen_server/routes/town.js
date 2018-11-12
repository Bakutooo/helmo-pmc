const express = require('express');
const router = express.Router();
const Town = require('./../models/Town');
const Partner = require('./../models/Partner');
const Citizen = require('./../models/Citizen');
const _Event = require('./../models/Event');
const hash = require('password-hash');

/**
 * Route    GET /town/
 * Récupère toutes les towns
 */
router.get('/', (req, res) => {
    Town.find()
        .then(towns => res.json(towns))
        .catch(err => res.json(err));
});

/**
 * Route    GET /town/:id
 * Récupère la town avec l'id mentionné
 */
router.get('/:id', (req, res) => {
    Town.findById(req.params.id)
        .then(town => res.json(town))
        .catch(err => res.json(err));
});


/**
 * Route    GET /town/partner/:id
 * Récupère les partners lié à la town
 */
router.get('/partner/:id', (req, res) => {
    Partner.find({town: req.params.id, state: "A"})
        .populate("town")
        .then(partners => res.json(partners))
        .catch(err => res.json(err));
});

/**
 * Route    GET /town/citizen/:id
 * Récupère les citizens validé lié à la town
 */
router.get('/citizen/:id', (req, res) => {
    Citizen.find({town: req.params.id})
        .then(citizens => res.json(citizens))
        .catch(err => res.json(err));
});

/**
 * Route    GET /town/event/:id
 * Récupère les events validé lié à town
 */
router.get('/event/:id', (req, res) => {
    _Event.find({town: req.params.id, state: "A"})
        .populate("town")
        .populate("partner")
        .then(event => res.json(event))
        .catch(err => res.json(err));
});

/**
 * Route    GET /town/event/request/:id
 * Récupère les requêtes d'évènement liè à town
 */
router.get('/event/request/:id', (req, res) => {
    _Event.find({town: req.params.id, state: "W"})
        .populate("town")
        .populate("partner")
        .then(event => res.json(event))
        .catch(err => res.json(err));
});

/**
 * Route    GET /town/partner/request/:id
 * Récupère les requêtes d'évènement liè à town
 */
router.get('/partner/request/:id', (req, res) => {
    Partner.find({town: req.params.id, state: "W"})
        .populate("town")
        .then(event => res.json(event))
        .catch(err => res.json(err));
});

/**
 * Route    POST /town/
 * Ajoute la town mentionné dans le corp de la requête
 */
router.post('/', (req, res) => {
    newTown = new Town({
        name: req.body.name,
        password: hash.generate(req.body.password)
    });

    newTown.save()
            .then(town => res.json(town))
            .catch(err => res.json(err));
});

/**
 * Route    POST /town/connection
 * Récupère la town avec les identifiants mentionnés dans le corp de la requête
 */
router.post('/connection', (req, res) => {
    Town.findOne({name: req.body.name})
        .then(town => {
            if(town !== null && hash.verify(req.body.password, town.password)) res.json(town);
            else res.json({error: "Identifiant invalide"});
        })
        .catch(err => res.json(err));
});

/**
 * Route    PUT /town/
 * Modifie la town mentionné dans le corp de la requête
 */
router.put('/', (req, res) => {
    Town.updateOne({_id: req.body.town._id}, req.body.town)
        .then(town => res.json(town))
        .catch(err => reS.json(err));
});

/**
 * Route    DELETE /town/:id
 * Supprime la town avec l'id mentionné
 */
router.delete('/:id', (req, res) => {
    Town.deleteOne({_id: req.params.id})
        .then(d => res.json(d))
        .catch(err => res.json(err));
});

module.exports = router;

