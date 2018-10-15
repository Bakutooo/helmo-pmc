const express = require('express');
const router = express.Router();
const Deal = require('./../models/Deal');

/**
 * Route    GET /deal/
 * Récupère tous les deals
 */
router.get('/', (req, res) => {
    Deal.find()
        .populate('partner')
        .then(deals => res.json(deals))
        .catch(err => res.json(err));
});

/**
 * Route    GET /deal/:id
 * Récupère le deal avec l'id mentionné
 */
router.get('/:id', (req, res) => {
    Deal.findById(req.params.id)
        .populate('partner')
        .then(deal => res.json(deal))
        .catch(err => res.json(err));
});

/**
 * Route    POST /deal/
 * Ajoute le deal mentionné dans le corp de la requête
 */
router.post('/', (req, res) => {
    newDeal = new Deal({
        name: req.body.name,
        price: req.body.price,
        partner: req.body.partner
    });

    newDeal.save()
            .then(deal => res.json(deal))
            .catch(err => res.json(err));
});

/**
 * Route    PUT /deal/
 * Modifie le deal mentionné dans le corp de la requête
 */
router.put('/', (req, res) => {
    Deal.updateOne({_id: req.body.deal._id}, req.body.deal)
        .then(deal => res.json(deal))
        .catch(err => res.json(err));
});

/**
 * Route    DELETE /deal/:id
 * Supprime le deal avec l'id mentionné
 */
router.delete('/:id', (req, res) => {
    Deal.deleteOne({_id: req.params.id})
        .then(d => res.json(d))
        .catch(err => res.json(err));
});

module.exports = router;

