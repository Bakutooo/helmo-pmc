const express = require('express');
const router = express.Router();
const Payment = require('./../models/Payment');
const Citizen = require('./../models/Citizen');
const Deal = require('./../models/Deal');

/**
 * Route    GET /payment/
 * Récupère tous les payements
 */
router.get("/", (req, res) => {
    let user = req._passport.session.user;
    if(req.isAuthenticated() && user.role === 'town'){
        Payment.find()
        .then(payments => res.json(payments))
        .catch(error => res.json({error : "Impossible de récupérer les payments"}))
    }
    else{
        res.status(401);
        res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
    }
});

/**
 * Route    GET /payment/:id
 * Récupère un payements
 */
router.get("/:id", (req, res) => {
    let user = req._passport.session.user;
    if(req.isAuthenticated() && user.role === 'town' && req.body.partner._id === user.id){
        Payment.findOne({_id : req.params.id})
        .then(payment => res.json(payment))
        .catch(err => res.json({error : "Impossible de récupérer le payement"}))
    }
    else{
        res.status(401);
        res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
    }
});

/**
 * Route    POST /payment/
 * Créé un payement
 */
router.post("/", (req, res) => {
    let { citizen, deal } = req.body;

    let newPayment = new Payment({
        dateTime : Date.now(),
        citizen : citizen,
        deal : deal
    });


    newPayment.save()
    .then(r => {
        Deal.findById(deal).then(d => {
            Citizen.updateOne({_id: citizen._id}, {...citizen, points: (citizen.points - d.price)})
            .then(c => res.json({message: "Payement effectué"}));
        });
    })
    .catch(err => res.json({message : "Impossible d'effectuer le payement"}))
});

module.exports = router;