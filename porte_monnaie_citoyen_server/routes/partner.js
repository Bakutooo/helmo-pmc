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

/**
 * Creation
 * ./partner/
 */

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
    .then(newPartner =>{
        if(newPartner == null){
        res.json({error : "Le partenaire n'a pas été créé 1"});
        }else{
            res.json(newPartner._id);
        }
    }).catch(error => { res.json({error : "Le partenaire n'a pas été créé 2"})});
});



router.get('/:id', (req, res) => {
    Partner.findOne({_id: req.params.id})
    .then(partner => {
        if(partner == null){
            res.json({error : "Id incorrect"});
        }else{
            res.json(partner);
        }
    }).catch(error => { res.json({error : "Id incorrect"})});
});



router.post('/change',(req, res) => {
    Partner.findOne({_id: req.body._id}, (err, doc) => {
        doc.name= req.body.name,
        doc.mail= req.body.mail,
        doc.tel= req.body.tel,
        doc.password= hash.generate(req.body.password),
        doc.save();
        res.json(doc);
    });
});

router.get('/events', (req, res) => {
    Partner.findOne({_id: req.body.id}).select(events);
});

router.post('/postEvents',(req, res) => {
    Partner.findOne({_id: req.body._id}, (err, doc) => {
        doc.events = req.body.events;
        doc.save();
        res.json(doc);
    });
});

router.get('/deals', (req, res) => {
    Partner.findOne({_id: req.body.id}).select(deals);
});

router.post('/postDeals',(req, res) => {
    Partner.findOne({_id: req.body._id}, (err, doc) => {
        doc.events = req.body.events;
        doc.save();
        res.json(doc);
    });
});

module.exports = router;