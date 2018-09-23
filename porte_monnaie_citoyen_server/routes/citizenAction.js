const express = require('express');
const router = express.Router();
const CitizenAction = require('./../models/CitizenAction');
const hash = require('password-hash');

/**
 * Recupère tous les actions citoyen
 * @route   /actionCitoyen/
 */
router.get('/', (req, res) => {
    CitizenAction.find()
        .then(citizenAction => res.json(citizenAction));
});

/**
 * Creation d'une action citoyenne
 * @route   /actionCitoyen/
 */
router.post('/', (req, res) => {
    let newCitizenaction = new CitizenAction({
        title: req.body.title,
        town: req.body.town,
        description: req.body.description,
        adress: req.body.adress,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        status: req.body.status,
        photo: req.body.photo,
        date: Date.now()
        });

    newCitizenaction.save()
        .then(res.json(newCitizenaction));
});

router.post('/change',(req, res) => {
    CitizenAction.findOne({_id: req.body._id}, (err, doc) => {
        doc.title = req.body.title;
        doc.description = req.body.description;
        doc.adress = req.body.adress;
        doc.latitude = req.body.latitude;
        doc.longitude = req.body.longitude;
        doc.photo = req.body.photo;
        doc.status = req.body.status;
        doc.save();
        res.json(doc);
    });
})

module.exports = router;