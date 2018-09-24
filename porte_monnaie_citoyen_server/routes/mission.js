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
        title: req.body.title,
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
    .then(newMission =>{
        if(newMission == null){
        res.json({error : "La mission n'a pas été créé 1"});
        }else{
            res.json(newMission._id);
        }
    }).catch(error => { res.json({error : "La mission n'a pas été créé (2)"})});
});

router.post('/change',(req, res) => {
    Mission.findOne({_id: req.body._id}, (err, doc) => {
        doc.title = req.body.title;
        doc.description = req.body.description;
        doc.adress = req.body.adress;
        doc.latitude = req.body.latitude;
        doc.longitude = req.body.longitude;
        doc.gain = req.body.gain;
        doc.priority = req.body.priority;
        doc.status = req.body.status;
        doc.save();
        res.json(doc);
    });
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

router.get('/getById/:id', (req, res) => {
    Mission.findOne({_id: req.params.id})
    .then(mission => {
        if(mission == null){
            res.json({error : "Id incorrect"});
        }else{
            res.json(mission);
        }
    }).catch(error => { res.json({error : "Id incorrect"})});
});

module.exports = router;

