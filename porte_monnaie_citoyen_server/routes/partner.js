const express = require('express');
const router = express.Router();
const Partner = require('./../models/Partner');
const hash = require('password-hash');


router.get('/', (req, res) => {
    Partner.find()
        .then(partner => res.json(partner));
});


router.post('/connection', (req, res) => {
    Partner.findOne({mail: req.body.mail}).select('name mail tel password')
    .then(partner => {
        if(hash.verify(req.body.password, partner.password)){
            console.log(partner.mail + " vient de se connecter");
            res.json(partner);
        } else {
            res.json({error: "Identifiant incorrect"});
        }
    });
});


router.post('/', (req, res) => {
    let newPartner = new Partner({
        name: req.body.name,
        mail: req.body.mail,
        tel: req.body.tel,
        password: hash.generate(req.body.password),
        deals: req.body.deals,
        events: req.body.events
    });

    newPartner.save()
        .then(res.json(newPartner));
});


router.get('/:id', (req, res) => {
    Partner.findById(req.params.id)
    .then(res.json())
    .catch(err => res.status(404).json({success: false}));
    Partner.findOne({_id: req.params.id})
    .then(partner => {
        if(hash.verify(req.body.password, partner.password)){
            res.json(partner);
        } else {
            res.json({error: "This id doesn't exist"});
        }
    });
});

router.post('/change',(req, res) => {
    Partner.findOne({_id: req.body._id}, (err, doc) => {
        doc.name= req.body.name,
        doc.mail= req.body.mail,
        doc.tel= req.body.tel,
        doc.password= hash.generate(req.body.password),
        doc.deals= req.body.deals,
        doc.events= req.body.events
        doc.save();
        res.json(doc);
    });
});

module.exports = router;