const express = require('express');
const router = express.Router();
const Participation = require('./../models/Participation');
const Citizen = require('./../models/Citizen');
const _Event = require('./../models/Event');

/**
 * Route    GET /participation
 * Récupère toutes les participations
 */
router.get('/', (req, res) => {
    Participation.find()
                .populate({
                    path: 'citizen',
                    populate: {path: 'town'}    
                })
                .populate({
                    path: 'event',
                    populate: {path: 'town'}
                })
                .populate({
                    path: 'event',
                    populate: {path: 'partner'}
                })
                 .then(par => res.json(par))
                 .catch(err => res.json(err));
});

/**
 * Route    GET /participation/citizen/:id
 * Récupère toutes les participation du citoyen
 */
router.get('/citizen/:id', (req, res) => {
    Participation.find({citizen: req.params.id})
                 .populate({
                    path: 'citizen',
                    populate: {path: 'town'}    
                })
                 .populate({
                    path: 'event',
                    populate: {path: 'town'}
                 })
                 .populate({
                    path: 'event',
                    populate: {path: 'partner'}
                 })
                 .then(par => res.json(par))
                 .catch(err => res.json(err));
});

/**
 * Route    GET /participation/event/:id
 * Récupère toutes les participation de l'évènement
 */
router.get('/event/:id', (req, res) => {
    Participation.find({event: req.params.id})
                .populate({
                    path: 'citizen',
                    populate: {path: 'town'}    
                })
                .populate({
                    path: 'event',
                    populate: {path: 'town'}
                })
                .populate({
                    path: 'event',
                    populate: {path: 'partner'}
                })
                 .then(par => res.json(par))
                 .catch(err => res.json(err));
});

/**
 * Route    POST /participation/
 * Ajoute une participation
 */
router.post('/', (req, res) => {
    _Event.find({password: req.body.password})
        .then(e => {
            if(e !== null){
                newParticipation = new Participation({
                    citizen: req.body.citizen,
                    event: req.body.event
                });
        
                newParticipation.save()
                                .then(p => res.json({message: "Participation ajouté"}))
                                .catch(err => res.json(err));
            }
        });

});

/**
 * Route    POST /participation/complete/:id
 * Ajoute une participation
 */
router.post('/complete/:id', (req, res) => {
    let { citizen, event} = req.body;
    _Event.find({password: req.body.password})
        .then(e => {
            Citizen.updateOne({_id: citizen._id}, {...citizen, points: citizen.points + event.gain})
                .then(e => {
                    Participation.deleteOne({_id: req.params.id})
                                .then(e => res.json(e))
                                .then(err => console.log(err));
                })
            }
        );

});

module.exports = router;