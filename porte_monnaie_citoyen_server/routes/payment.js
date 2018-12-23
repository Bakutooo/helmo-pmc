const express = require('express');
const router = express.Router();
const Payment = require('./../models/Payment');
const Citizen = require('./../models/Citizen');

/**
 * Route    GET /payment/
 * Récupère tous les payements
 */
router.get("/", (req, res) => {
    Payment.find()
    .then(payments => res.json(payments))
    .catch(error => res.json({error : "Impossible de récupérer les payments"}))
});

/**
 * Route    GET /payment/:id
 * Récupère un payements
 */
router.get("/:id", (req, res) => {
    Payment.findOne({_id : req.params.id})
    .then(payment => res.json(payment))
    .catch(err => res.json({error : "Impossible de récupérer le payement"}))
});

/**
 * Route    POST /payment/
 * Créé un payement
 */
router.post("/", (res, req) => {
    let { citizen, deal } = req.body;

    let newPayment = new Payment({
        dateTime : Date.now(),
        citizen : citizen,
        deal : deal
    });

    newPayment.save()
    .then(r => {
        Citizen.updateOne({_id: citizen._id}, {...citizen, sold: citizen.sold - deal.price});
        res.json({message: "Payement effectué"});
    })
    .catch(err => res.json({message : "Impossible d'effectuer le payement"}))
});

module.exports = router;