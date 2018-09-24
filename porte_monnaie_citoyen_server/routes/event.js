const express = require('express');
const router = express.Router();
const Event = require('./../models/Event');
const hash = require('password-hash');


router.get('/', (req, res) => {
    Event.find()
        .then(event => res.json(event));
});


router.post('/', (req, res) => {
    let newEvent = new Event({
        title: req.body.title,
        description: req.body.description,
        town: req.body.town,
        adress: req.body.adress,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        gain: req.body.gain,
        date_begin: req.body.date_begin,
        date_end: req.body.date_end
        });

    newEvent.save()
        .then(res.json(newEvent));
});

router.post('/change',(req, res) => {
    Event.findOne({_id: req.body._id}, (err, doc) => {
        doc.title= req.body.title,
        doc.description= req.body.description,
        doc.town= req.body.town,
        doc.adress= req.body.adress,
        doc.latitude= req.body.latitude,
        doc.longitude= req.body.longitude,
        doc.gain= req.body.gain,
        doc.date_begin= req.body.date_begin,
        doc.date_end= req.body.date_end
        doc.save();
        res.json(doc);
    });
})

router.get('/participate/:id', (req,res) => {
    Event.findById(req.params.id)
    .then(result => {
        res.json({access: 'ok'});
    })
    .catch(result => res.json({access: 'nok'}));
});

router.get('/complete/:id', (req,res) => {
    Event.findById(req.params.id)
    .then(result => {
        res.json({access: 'ok'});
    })
    .catch(result => res.json({access: 'nok'}));
});

module.exports = router;