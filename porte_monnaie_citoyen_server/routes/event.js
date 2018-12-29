const express = require('express');
const router = express.Router();
const _Event = require('./../models/Event');
const generatePassword = require('generate-password');
const socketInfo = require('./../socket-info');

/**
 * Route   GET /event/
 * Récupère tous les "events"
 */
router.get("/", (req, res) => {
    try{
        let user = req._passport.session.user;
        if(req.isAuthenticated() && (user.role === 'town' || user.role === 'citizen')){
            _Event.find()
                .populate("town")
                .populate("partner")
                .then(events => res.json(events))
                .catch(error => res.json({error : "Impossible de récupérer les events."}))
        }
        else{
            res.status(401);
            res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
        }
    }
    catch(err){
        res.status(403);
        res.json({error : "Une erreur s'est produite"});
    }
});

/**
 * Route    GET /event/:id
 * Récupère un "event" par rapport à son id
 */
router.get("/:id", (req, res) => {
    try{
        let role = req._passport.session.user;
        if(req.isAuthenticated() && (user.role === 'town' || user.role === 'citizen')){
            _Event.findOne({_id : req.params.id})
                .populate("town")
                .populate("partner")
                .then(event => res.json(event))
                .catch(error => res.json({error : "Impossible de récupérer l'event"}))
        }
        else{
            res.status(401);
            res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
        }
    }
    catch(err){
        res.status(403);
        res.json({error : "Une erreur s'est produite"});
    }
});

/**
 * Route    POST /event/
 * Créé un nouvel "event"
 */
router.post("/", (req, res) => {
    try{
        let user = req._passport.session.user;
        if(req.isAuthenticated() && user.role === 'partner' && req.body.partner._id === user.id){
            let newEvent = new _Event({
                name: req.body.name,
                description: req.body.description,
                address: req.body.address,
                gain: 0,
                password: generatePassword.generate({length: 24, numbers: true}),
                date: new Date(req.body.date),
                image: "placeholder.png",
                state: "W",
                town: req.body.town,
                partner: req.body.partner
            });
        
            newEvent.save()
            .then(event => {
                socketInfo.socket.emit("newEvent");
                res.json(event)
            })
            .catch(error => res.json({error}))
        }
        else{
            res.status(401);
            res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
        }
    }
    catch(err){
        res.status(403);
        res.json({error : "Une erreur s'est produite"});
    }
});

/**
 * Route    PUT /event/
 * Modifie un "event"
 */
router.put("/", (req, res) => {
    try{
        let user = req._passport.session.user;
        if(req.isAuthenticated() && user.role === 'town'){
            _Event.updateOne({_id : req.body.event._id}, req.body.event)
        .then(event => {
            socketInfo.socket.emit("changedEvent");
            res.json(req.body.event._id)
        })
        .catch(error => res.json({error : "Impossible de mettre à jour l'event"}))
        }
        else{
            res.status(401);
            res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
        }
    }
    catch(err){
        res.status(403);
        res.json({error : "Une erreur s'est produite"});
    }
});

/**
 * Route DELETE /event/:id
 * Supprime un "event"
 */
router.delete("/:id", (req, res) => {
    try{
        let user = req._passport.session.user;
        if(req.isAuthenticated() && user.role === 'partner'){
            _Event.deleteOne({_id : req.params.id})
                .then(result => res.json(result))
                .catch(error => res.json({error : "Impossible de supprimer l'event"}))
        }
        else{
            res.status(401);
            res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
        }
    }
    catch(err){
        res.status(403);
        res.json({error : "Une erreur s'est produite"});
    }    
});

module.exports = router;