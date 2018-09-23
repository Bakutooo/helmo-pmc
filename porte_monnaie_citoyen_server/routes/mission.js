const express = require('express');
const router = express.Router();
const Mission = require('./../models/Mission');
const hash = require('password-hash');

/**
 * Recupère tous les missions
 * @route   /mission/
 */
router.get('/', (req, res) => {
    Mission.find()
        .then(mission => res.json(mission));
});

/**
 * Creation d'une mission
 * @route   /mission/
 */
router.post('/', (req, res) => {
    let newMission = new Mission({
        titre: req.body.name,
        description: req.body.description,
        adress: req.body.adress,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        gain: req.body.gain,
        priority: req.body.priority,
        status: req.body.status,
        date_begin: req.body.date_begin,
        date_end: req.body.date_end
        });

    newUser.save()
        .then(res.json(newMission));
});

router.post('/change',(req, res) => {
    Mission.update({_id: req.body.id}, {$set :
        {titre: req.body.name,
        description: req.body.description,
        adress: req.body.adress,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        gain: req.body.gain,
        priority: req.body.priority,
        status: req.body.status,
        date_begin: req.body.date_begin,
        date_end: req.body.date_end}})
})

module.exports = router;

