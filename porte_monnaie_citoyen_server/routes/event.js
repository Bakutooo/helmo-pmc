const express = require('express');
const router = express.Router();
const _Event = require('./../models/Event');

/**
 * Route   GET /event/
 * Récupère tous les "events"
 */
router.get("/", (req, res) => {
    _Event.find()
    .populate("town")
    .populate("partner")
    .then(events => res.json(events))
    .catch(error => res.json({error : "Impossible de récupérer les events."}))
});

/**
 * Route    GET /event/:id
 * Récupère un "event" par rapport à son id
 */
router.get("/:id", (req, res) => {
    _Event.findOne({_id : req.params.id})
    .populate("town")
    .populate("partner")
    .then(event => res.json(event))
    .catch(error => res.json({error : "Impossible de récupérer l'event"}))
});

/**
 * Route    POST /event/
 * Créé un nouvel "event"
 */
router.post("/", (req, res) => {
    let newEvent = new _Event({
        name: req.body.name,
        description: req.body.description,
        address: req.body.address,
        gain: 0,
        date: Date.now(),
        image: "",
        state: "W",
        town: req.body.town,
        partner: req.body.partner
    });

    newEvent.save()
    .then(event => res.json(event))
    .catch(error => res.json({error}))
});

/**
 * Route    PUT /event/
 * Modifie un "event"
 */
router.put("/", (req, res) => {
    _Event.updateOne({_id : req.body.event._id}, req.body.event)
    .then(event => res.json(req.body.event._id))
    .catch(error => res.json({error : "Impossible de mettre à jour l'event"}))
});

/**
 * Route DELETE /event/:id
 * Supprime un "event"
 */
router.delete("/:id", (req, res) => {
    _Event.deleteOne({_id : req.params.id})
    .then(result => res.json(result))
    .catch(error => res.json({error : "Impossible de supprimer l'event"}))
});

module.exports = router;