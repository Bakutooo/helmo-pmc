const express = require('express');
const router = express.Router();
const Partner = require('./../models/Partner');
const Deal = require('./../models/Deal');
const _Event = require('./../models/Event');
const hash = require('password-hash');
const socketInfo = require('./../socket-info');

/**
 * Route    GET /partner/
 * Récupère tous les partners
 */
router.get('/', (req, res) => {
    
    if(req.isAuthenticated()){
        Partner.find()
            .populate('town')
            .then(partners => res.json(partners))
            .catch(err => res.json(err));
    }
    else{
        res.status(401);
        res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
    }
    
});

/**
 * Route    GET /partner/:id
 * Récupère le partner avec l'id mentionné
 */
router.get('/:id', (req, res) => {
    if(req.isAuthenticated()){
        Partner.findById(req.params.id)
            .populate('town')
            .then(partner => res.json(partner))
            .catch(err => res.json(err));
    }
    else{
        res.status(401);
        res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
    }
    
});

/**
 * Route    GET /partner/deal/:id
 * Récupère les deals liés à partner id
 */
router.get('/deal/:id', (req, res) => {
    let user = req._passport.session.user;
    if(req.isAuthenticated() && user.role === 'citizen'){
        Deal.find({partner: req.params.id})
        .then(deals => res.json(deals))
        .catch(err => res.json(err));
    }
    else{
        res.status(401);
        res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
    }
    
});

/**
 * Route    GET /partner/event/:id
 * Récupère les events liés à partner id
 */
router.get('/event/:id', (req, res) => {
    let user = req._passport.session.user;
    if(req.isAuthenticated()){
        _Event.find({partner: req.params.id})
          .then(events => res.json(events))
          .catch(err => req.json(err));
    }
    else{
        res.status(401);
        res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
    }
    
});

/**
 * Route    POST /partner/
 * Ajoute le partner mentionné dans le corps de la requête
 */
router.post('/', (req, res) => {
    newPartner = new Partner({
        name: req.body.name,
        mail: req.body.mail,
        phone: req.body.phone,
        tva: req.body.tva,
        password: "N/A",
        state: "W",
        address: req.body.address,
        town: req.body.town,
        description: req.body.description
    });

    newPartner.save()
              .then(partner => {
                    socketInfo.socket.emit("newPartner");
                    res.json(partner);
                })
              .catch(err => res.json(err));
});

/**
 * Route    POST /partner/connection
 * Récupère le partner avec les identifiants mentionnés dans le corps de la requête
 */
router.post('/connection', (req, res) => {
    req.body.Partner = Partner;
    passport.authenticate('partner', (err, user, info) => {
        if(info){
            return res.send(info.message);
        }
        if(err) {
            return next(err);
        }
        if(!user) {
            return res.send(err);
        }
        req.login(user, (err) => {
            let partner = user.user;
            return res.json(blacklist(partner, "password"));
        })
    })(req, res, next);

    // Partner.findOne({mail: req.body.mail})
    //        .then(partner => {
    //            if(partner.state === "W") res.json({error: "Partenariat pas encore validé"});
    //            else if(hash.verify(req.body.password, partner.password)) res.json(partner);
    //            else res.json({error: "Identifiants incorrect"});
    //        })
    //        .catch(err => res.json(err));
});

/**
 * Route    PUT /partner/
 * Modifie la partner mentionné dans le corp de la requête
 */
router.put('/', (req, res) => {
    let user = req._passport.session.user;
    if(req.isAuthenticated() && user.role === 'partner' && req.body.partner._id === user.id){
        if(!hash.isHashed(req.body.partner.password)) req.body.partner.password = hash.generate(req.body.partner.password);
        Partner.updateOne({_id: req.body.partner._id}, req.body.partner)
           .then(partner => res.json(req.body.partner._id))
           .catch(err => {
                console.log("ERROR");
               res.json(err)
        });
    }
    else{
        res.status(401);
        res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
    }
    
});

/**
 * Route    DELETE /partner/:id
 * Supprime le partner avec l'id mentionné
 */
router.delete('/:id', (req, res) => {
    let user = req._passport.session.user;
    if(req.isAuthenticated() && user.role === 'town'){
        Partner.deleteOne({_id: req.params._id})
           .then(d => res.json(d))
           .catch(err => res.json(err));
    }
    else{
        res.status(401);
        res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
    }
    
});

module.exports = router;