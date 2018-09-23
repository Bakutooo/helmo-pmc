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
        titre: req.body.titre,
        town: req.body.town,
        description: req.body.description,
        adress: req.body.adress,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        gain: req.body.gain,
        priority: req.body.priority,
        status: req.body.status,
        date_begin: Date.now()
        });

    newMission.save()
        .then(res.json(newMission));
});

router.post('/change',(req, res) => {
        Mission.update({_id: req.body.id}, {$set :
            {titre: req.body.titre,
            description: req.body.description,
            adress: req.body.adress,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            gain: req.body.gain,
            priority: req.body.priority,
            status: req.body.status,
            }})
})

router.post('/finish',(req, res)=>{
    if(req.body.status == "Fini"){
        Mission.update({_id: req.body.id},{$set :
            {
                status : req.body.status,
                date_end: Date.now
            }
        })
    }
})

module.exports = router;

