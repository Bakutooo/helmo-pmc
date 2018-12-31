const express = require('express');
const router = express.Router();
const Town = require('./../models/Town');
const Partner = require('./../models/Partner');
const Citizen = require('./../models/Citizen');
const _Event = require('./../models/Event');
const hash = require('password-hash');
const passport = require('passport');

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
 * Récupère les partners liés à la town
 */
router.get('/partner/:id', (req, res) => {
    try{
        let user = req._passport.session.user;
        if(req.isAuthenticated() && user.role === 'town' && user.id === req.params.id){
            Partner.find({town: req.params.id, state: "A"})
            .populate("town")
            .then(partners => res.json(partners))
            .catch(err => res.json(err));
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
 * Route    GET /town/citizen/:id
 * Récupère les citizens validés liés à la town
 */
router.get('/citizen/:id', (req, res) => {
    try{
        let user = req._passport.session.user;
        if(req.isAuthenticated() && user.role === 'town' && user.id === req.params.id){
            Citizen.find({town: req.params.id})
            .then(citizens => res.json(citizens))
            .catch(err => res.json(err));
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
 * Route    GET /town/event/:id
 * Récupère les events validés liés à town
 */
router.get('/event/:id', (req, res) => {
    try{
        let user = req._passport.session.user;
        if(req.isAuthenticated() && user.role === 'town' && req._passport.session.user.id === req.params.id){
            _Event.find({town: req.params.id, state: "A"})
            .populate("town")
            .populate("partner")
            .then(event => res.json(event))
            .catch(err => res.json(err));
        }
        else {
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
 * Route    GET /town/event/request/:id
 * Récupère les requêtes d'évènement liées à town
 */
router.get('/event/request/:id', (req, res) => {
    try{
        let user = req._passport.session.user;
        if(req.isAuthenticated() && user.role === 'town' && user.id === req.params.id){
            _Event.find({town: req.params.id, state: "W"})
            .populate("town")
            .populate("partner")
            .then(event => res.json(event))
            .catch(err => res.json(err));
        }
        else{
            res.status(401);
            res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
        }
    }
    catch(err){
        console.log(err);
        console.log(req);
        res.status(403);
        res.json({error : "Une erreur s'est produite"});
    } 
});

/**
 * Route    GET /town/partner/request/:id
 * Récupère les requêtes de partenariat liées à town
 */
router.get('/partner/request/:id', (req, res) => {
    try{
        let user = req._passport.session.user;
        if(req.isAuthenticated() && user.role === 'town' && user.id === req.params.id){
            Partner.find({town: req.params.id, state: "W"})
                .populate("town")
                .then(event => res.json(event))
                .catch(err => res.json(err));
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
 * Route    POST /town/
 * Ajoute la town mentionnée dans le corps de la requête
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
router.post('/connection', (req, res, next) => {
    req.body.Town = Town;
    passport.authenticate('town', (err, user, info) => {
        if(info){
            return res.send(info.message);
        }
        if(err) {
            return next(err);
        }
        if(!user) {
            return res.send(err);
        }
        req.login(user, (err) => {
            let town = user.user;
            return res.json({...town._doc, password: undefined});
        })
    })(req, res, next);
});

/**
 * Route    PUT /town/
 * Modifie la town mentionnée dans le corps de la requête
 */
router.put('/', (req, res) => {
    try{
        let user = req._passport.session.user;
        if(req.isAuthenticated() && user.role === "town"){
            Town.updateOne({_id: req.body.town._id}, req.body.town)
            .then(town => res.json(town))
            .catch(err => reS.json(err));
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

