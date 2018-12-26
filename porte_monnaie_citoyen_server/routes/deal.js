const express = require('express');
const router = express.Router();
const Deal = require('./../models/Deal');
const genratePassword = require('generate-password');

/**
 * Route    GET /deal/
 * Récupère tous les deals
 */
router.get('/', (req, res) => {
    let user = req._passport.session.user;
    if(req.isAuthenticated() && (user.role === 'citizen' || user.role === 'town')){
        Deal.find()
        .populate('partner')
        .then(deals => res.json(deals))
        .catch(err => res.json(err));
    }
    else{
        res.status(401);
        res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
    }
    
});

/**
 * Route    GET /deal/:id
 * Récupère le deal avec l'id mentionné
 */
router.get('/:id', (req, res) => {
    let user = req._passport.session.user;
    if(req.isAuthenticated() && (user.role === 'town' || user.role === 'citizen')){
        Deal.findById(req.params.id)
        .populate('partner')
        .then(deal => res.json(deal))
        .catch(err => res.json(err));
    }
    else{
        res.status(401);
        res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
    }
    
});

/**
 * Route    POST /deal/
 * Ajoute le deal mentionné dans le corps de la requête
 */
router.post('/', (req, res) => {
    let user = req._passport.session.user;
    if(req.isAuthenticated() && user.role === 'partner' && user.id === req.body.partner.id){
        newDeal = new Deal({
            name: req.body.name,
            password: genratePassword.generate({length: 24, numbers: true}),
            price: req.body.price,
            partner: req.body.partner
        });

        newDeal.save()
            .then(deal => res.json(deal))
            .catch(err => res.json(err));
    }
    else{
        res.status(401);
        res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
    }
    
});

/**
 * Route    PUT /deal/
 * Modifie le deal mentionné dans le corps de la requête
 */
router.put('/', (req, res) => {
    let user = req._passport.session.user;
    if(req.isAuthenticated() && user.role === 'partner'){
        Deal.updateOne({_id: req.body.deal._id}, req.body.deal)
            .then(deal => res.json(deal))
            .catch(err => res.json(err));
    }
    else{
        res.status(401);
        res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
    }
    
});

/**
 * Route    DELETE /deal/:id
 * Supprime le deal avec l'id mentionné
 */
router.delete('/:id', (req, res) => {
    let user = req._passport.session.user;
    if(req.isAuthenticated() && user.role === 'partner'){
        Deal.deleteOne({_id: req.params.id})
            .then(d => res.json(req.params.id))
            .catch(err => res.json(err));
    }
    else{
        res.status(401);
        res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
    }
    
});

module.exports = router;

