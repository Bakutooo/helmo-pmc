const express = require('express');
const router = express.Router();
const Partner = require('./../models/Partner');
const hash = require('password-hash');

/**
 * get ALL partner
 * @route /partener/
 */
router.get('/', (req, res) => {
    Partner.find()
        .populate('deals')
        .then(partner => res.json(partner));
});

/**
 * @route   /partner/connection
 */
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
 * Creation of the partner
 * @route /partner/
 */

router.post('/', (req, res) => {
    let newPartner = new Partner({
        name: req.body.name,
        mail: req.body.mail,
        tel: req.body.tel,
        password: hash.generate(req.body.password),
        deals: req.body.deals,
        events: req.body.events,
        request: req.body.request
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

/**
 * get a partner by the id
 * @route /partner/getById/:id
 */

router.get('/getById/:id', (req, res) => {
    Partner.findOne({_id: req.params.id})
    .then(partner => {
        if(partner == null){
            res.json({error : "getbyId : Id incorrect (1)"});
        }else{
            res.json(partner);
        }
    }).catch(error => { res.json({error : "getbyId : Id incorrect (2)"})});
});

/**
 * modify a partner
 * @route /partner/change
 */
router.post('/change/:id',(req, res) => {
    Partner.findOne({_id: req.body.id}, (err, doc) => {
        doc.name= req.body.name,
        doc.mail= req.body.mail,
        doc.tel= req.body.tel,
        doc.password= hash.generate(req.body.password),
        doc.save();
        res.json(doc);
    });
});

/**
 * Get all event of a partner by his id
 * @route /partner/events/:id
 */
router.get('/events/:id', (req, res) => {
    Partner.findOne({_id: req.params.id})
    .then(partner => {
        if(partner == null){
            res.json({error : "Id incorrect (1)"});
        }else{
            res.json(partner.events);
        }
    }).catch(error => { res.json({error : "Id incorrect (2)"})});
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
        doc.deals = req.body.deals;
        doc.save();
        res.json(doc);
    });
});

router.get('/requestPartner',(req, res)=>{
    Partner.find({_id: req.body._id}).select("request");
})

module.exports = router;