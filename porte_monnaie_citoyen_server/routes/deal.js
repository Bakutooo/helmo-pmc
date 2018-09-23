const express = require('express');
const router = express.Router();
const Deal = require('./../models/Deal');
const hash = require('password-hash');


router.get('/', (req, res) => {
    Deal.find()
        .then(deal => res.json(deal));
});


router.post('/', (req, res) => {
    let newDeal = new Deal({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
        });

    newDeal.save()
        .then(res.json(newDeal));
});

router.post('/change',(req, res) => {
    Deal.findOne({_id: req.body._id}, (err, doc) => {
        doc.title= req.body.title,
        doc.description= req.body.description,
        doc.price= req.body.price
        doc.save();
        res.json(doc);
    });
})

module.exports = router;

