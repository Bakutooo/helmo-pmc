const express = require('express');
const router = express.Router();
const Partner = require('./../models/Partner');
const Deal = require('./../models/Deal');
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
    Partner.findOne({mail: req.body.mail}).select('name mail tel')
    .populate('events')
    .populate('deals')
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
router.post('/change/',(req, res) => {
    Partner.findOne({_id: req.body.id}, (err, doc) => {
        if(doc == null){
            res.json({error: "erreur lors des modifs du partner"})
        }else{
            doc.name= req.body.name,
            doc.mail= req.body.mail,
            doc.tel= req.body.tel,
            doc.password= hash.generate(req.body.password),
            doc.save();
            res.json(doc);
        }
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

/**
 * Add a event to a partner
 * @route /partner/postEvents
 */
router.post('/postEvents',(req, res) => {
    Partner.findOne({_id: req.body._id}, (err, doc) => {
        doc.events = req.body.events;
        doc.save();
        res.json(doc);
    });
});

/**
 * Get all deals from a partner
 * @route /partner/deals
 */
router.get('/deals', (req, res) => {
    Partner.findOne({_id: req.body.id}).select(deals);
});

/**
 * Add a deal to a partner if it already exist
 * @route /partner/postDeal
 */
router.post('/postDeal',(req, res) => {
    Partner.findOne({_id: req.body._id}, (err, doc) => {
        doc.deals = req.body.deals;
        doc.save();
        res.json(doc);
    });
});

/**
 * Add a deal if it doesn't exist
 * @route /partner/createDeal
 */
router.post('/createDeal',(req, res) => {
    let newDeal = new Deal({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
        });

    newDeal.save()
    .then(newDeal =>{
        if(newDeal == null){
        res.json({error : "Le deal n'a pas été créé (1)"});
        }else{
            //newDeal._id
            Partner.findOne({_id: req.body._id}, (err, doc) => {
                doc.deals.push(newDeal.id);
                doc.save();
            });

            res.json(newDeal);
        }
    }).catch(error => { res.json({error : "Le deal n'a pas été créé (2)"})});
});

/**
 * Delete a deal from the deal's list
 * @route /partner/deleteDeal
 */
router.get('/deleteDeal/:idDeal/:idPart',(req, res) => {
    Deal.findByIdAndRemove(req.params.idDeal)
        .then(function(){
            //truc
            
        })
        .catch(error => {res.json({error: "Le deal n'a pas pu être supprimer"})});
});


/**
 * Get request (status informations) of a partner
 */
router.get('/requestPartner',(req, res)=>{
    Partner.find({_id: req.body._id}).select("request");
})

module.exports = router;