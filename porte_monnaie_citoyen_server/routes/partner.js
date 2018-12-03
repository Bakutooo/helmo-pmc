const express = require('express');
const router = express.Router();
const Partner = require('./../models/Partner');
const Deal = require('./../models/Deal');
const hash = require('password-hash');

/**
 * Route    GET /partner/
 * Récupère tous les partners
 */
router.get('/', (req, res) => {
    Partner.find()
            .populate('town')
            .then(partners => res.json(partners))
            .catch(err => res.json(err));
});

/**
 * Route    GET /partner/:id
 * Récupère le partner avec l'id mentionné
 */
router.get('/:id', (req, res) => {
    Partner.findById(req.params.id)
            .populate('town')
            .then(partner => res.json(partner))
            .catch(err => res.json(err));
});

/**
 * Route    GET /partner/deal/:id
 * Récupère les deals lié à partner
 */
router.get('/deal/:id', (req, res) => {
    Deal.find({partner: req.params.id})
        .then(deals => res.json(deals))
        .catch(err => res.json(err));
});

/**
 * Route    POST /partner/
 * Ajoute le partner mentionné dans le corp de la requête
 */
router.post('/', (req, res) => {
    newPartner = new Partner({
        name: req.body.name,
        mail: req.body.mail,
        phone: req.body.phone,
        tva: req.body.tva,
        password: null,
        state: "W",
        town: req.body.town,
        description: req.body.description
    });

    newPartner.save()
              .then(partner => res.json(partner))
              .catch(err => res.json(err));
});

/**
 * Route    POST /partner/connection
 * Récupère le partner avec les identifiants mentionnés dans le corp de la requête
 */
router.post('/connection', (req, res) => {
    Partner.findOne({mail: req.body.mail})
           .then(partner => {
               if(partner.state === "W") res.json({error: "Partenariat pas encore validé"});
               else if(hash.verify(req.body.password, partner.password)) res.json(partner);
               else res.json({error: "Identifiants incorrect"});
           })
           .catch(err => res.json(err));
});

/**
 * Route    PUT /partner/
 * Modifie la partner mentionné dans le corp de la requête
 */
router.put('/', (req, res) => {
    if(!hash.isHashed(req.body.partner.password)) req.body.partner.password = hash.generate(req.body.partner.password);
    Partner.updateOne({_id: req.body.partner._id}, req.body.partner)
           .then(partner => res.json(req.body.partner._id))
           .catch(err => {
                console.log("ERROR");
               res.json(err)
            });
});

/**
 * Route    DELETE /partner/:id
 * Supprime le partner avec l'id mentionné
 */
router.delete('/:id', (req, res) => {
    Partner.deleteOne({_id: req.params._id})
           .then(d => res.json(d))
           .catch(err => res.json(err));
});

module.exports = router;