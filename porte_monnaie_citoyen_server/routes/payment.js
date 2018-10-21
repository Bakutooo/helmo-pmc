const express = require('express');
const router = express.Router();
const Payment = require('./../models/Payment');

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
    .catch(payment => res.json({error : "Impossible de récupérer le payement"}))
});

/**
 * Route    POST /payment/
 * Créé un payement
 */
router.post("/", (res, req) => {
    let newPayment = new Payment({
        dateTime : Date.now(),
        citizen : req.body.citizen,
        deal : req.citizen.deal
    });

    newPayment.save()
    .then(result => res.json(result))
    .catch(error => res.json({error : "Impossible d'enregistrer le payement"}))
});

module.exports = router;