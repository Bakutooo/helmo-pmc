const express = require('express');
const router = express.Router();
const Citizen = require('./../models/Citizen');
const hash = require('password-hash');
const passport = require('passport');
const blacklist = require('blacklist');

/**
 * Route    GET /citizen/
 * Récupère tous les citoyens
 */
router.get("/", (req, res) => {
    let user = req._passport.session.user;
    if(req.isAuthenticated() && user.role === 'town'){
        Citizen.find()
        .populate('town')
        .then(citizens => res.json(citizens))
        .catch(error => res.json({error : "Impossible de récupérer les citoyens"}))
    }
    else{
        res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
    }
});

/**
 * Route    GET /citizen/:id
 * Récupère un citoyen
 */
router.get("/:id", (req, res) => {
    let user = req._passport.session.user;
    if((req.isAuthenticated() && user.role === 'town') || (req.isAuthenticated() && user.role === 'citizen' && user.id === req.params.id)){
        Citizen.findOne({_id : req.params.id})
        .populate('town')
        .then(citizen => res.json(citizen))
        .catch(error => res.json({error : "Impossible de récupérer le citoyen"}));
    }
    else{
        res.status(401);
        res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
    }
});

/**
 * Route    POST /citizen/connection
 * Permet la connexion du citoyen
 */
router.post('/connection', (req, res, next) => {
    console.log('Connexion page');
    console.log(req.body);
    req.body.Citizen = Citizen;
    passport.authenticate('citizen', (err, user, info) => {
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
            let citizen = user.user;
            return res.json(blacklist(citizen, "password"));
        })
    })(req, res, next);
});

// router.post("/connection", (req, res) => {
//     console.log("Connection : " + req.sessionID);

//     passport.authenticate('citizen', (err, user, info) => {
//         console.log('here');
//         console.log(user);
//     });
//     res.send('Connection route');
//     // Citizen.findOne({mail : req.body.mail})
//     // .populate("town")
//     // .then(citizen => {
//     //     if(hash.verify(req.body.password, citizen.password)){
//     //         res.json(citizen);
//     //     }
//     //     else{
//     //         res.json({error : "Identifiants incorrectes"})
//     //     }
//     // })
//     // .catch(error => res.json({error : "Identifiants incorrectes"}))
// });

/**
 * Route    POST /citizen/
 * Permet la création d'un citoyen
 */
router.post("/", (req, res) => {
    let newUser = new Citizen({
        lastname : req.body.lastname,
        firstname : req.body.firstname,
        birthday : req.body.birthday,
        numNat : req.body.numNat,
        address : req.body.address,
        mail : req.body.mail,
        phone : req.body.phone,
        password : hash.generate(req.body.password),
        town : req.body.town
    })

    newUser.save()
    .then(citizen => res.json(citizen))
    .catch(error => {
        console.log(error);
        res.json({error : "Impossible de créer le compte"});
    });
});

/**
 * Route    PUT /citizen/
 * Permet de mettre à jour les informations d'un citoyen
 */
router.put("/", (req, res) => {
    let user = req._passport.session.user;
    if(req.isAuthenticated() && user.role === 'town'){
        if(req.body.citizen.password !== undefined){
            req.body.citizen.password = hash.generate(req.body.citizen.password)
        }

        Citizen.updateOne({_id : req.body.citizen._id}, req.body.citizen)
        .then(citizen => res.json(citizen))
        .catch(error => res.json({error : "Impossible de mettre à jour le citoyen"}));
    }
    else{
        res.status(401);
        res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
    }
});

/**
 * Route    DELETE /citizen/:id
 * Permet de supprimer un citoyen
 */
router.delete("/:id", (req, res) => {
    let user = req._passport.session.user;
    if(req.isAuthenticated() && user.role === 'town'){
        Citizen.deleteOne({_id : req.params.id})
        .then(result => res.json(req.params.id))
        .catch(error => res.json({error : "Impossible de supprimer le citoyen"}));
    }
    else{
        res.status(401);
        res.json({error : "Vous n'avez pas les autorisations pour effectuer cette action"});
    }
});

module.exports = router;